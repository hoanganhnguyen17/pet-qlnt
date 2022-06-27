import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

interface IRoleDetail {
    list: boolean;
    view: boolean;
    create: boolean;
    update: boolean;
    delete: boolean;
}

export async function generateDefaultUser(prisma: PrismaClient): Promise<any> {
    const adminData = {
            firstName: 'Nguyen',
            lastName: 'Admin',
            status: true,
            type: 1,
            gender: 1,
            phoneNumber: '00000000',
            dateOfBirth: new Date('1990-01-01T03:24:00'),
            email: 'admin@gmail.com',
            password: await bcrypt.hash('admin@123', 8),
        },
        renterData = {
            firstName: 'Nguyen',
            lastName: 'Renter',
            status: true,
            type: 1,
            gender: 0,
            phoneNumber: '00000001',
            dateOfBirth: new Date('1992-12-01T03:24:00'),
            email: 'renter@gmail.com',
            password: await bcrypt.hash('renter@123', 8),
        };
    const renter = await prisma.user.create({ data: renterData });
    await generateDefaultRole(prisma, renter.id);
    const admin = await prisma.user.create({ data: adminData });
    await generateDefaultRole(prisma, admin.id);
}

export async function generateDefaultRole(
    prisma: PrismaClient,
    userId: number,
    isAdmin: boolean = false,
): Promise<any> {
    const roleAdminDetailData: IRoleDetail = {
            create: true,
            delete: true,
            list: true,
            update: true,
            view: true,
        },
        roleRenterDetailData: IRoleDetail = {
            create: false,
            delete: false,
            list: false,
            update: true,
            view: true,
        },
        roleName = isAdmin ? 'admin' : 'renter';
    const module = ['user', 'role', 'room'];
    for (let i = 0; i < module.length; i++) {
        const role = await prisma.role.create({
            data: {
                name: roleName,
            },
        });
        prisma.userRole.create({
            data: {
                roleId: role.id,
                userId,
            },
        });
        if (isAdmin) {
            prisma.roleDetail.create({
                data: {
                    ...roleAdminDetailData,
                    moduleName: module[i],
                    roleId: role.id,
                },
            });
        } else {
            prisma.roleDetail.create({
                data: {
                    ...roleRenterDetailData,
                    moduleName: module[i],
                    roleId: role.id,
                },
            });
        }
    }
}
