import { PrismaClient, User, UserRoom } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

export default async function generateUser(prisma: PrismaClient): Promise<User> {
    const firstName = faker.name.findName(),
        lastName = faker.name.lastName();
    const data = {
        firstName,
        lastName,
        status: faker.datatype.boolean(),
        gender: faker.datatype.number({ min: 0, max: 2 }),
        type: faker.datatype.number({ min: 0, max: 1 }),
        phoneNumber: faker.phone.phoneNumber('+84#########'),
        dateOfBirth: faker.date.birthdate(),
        email: faker.internet.email(firstName, lastName),
        password: await bcrypt.hash('seeder123', 8),
    };
    const user = await prisma.user.create({ data });
    return user;
}

export async function generateUserRoom(
    prisma: PrismaClient,
    roomId: number,
    userId: number,
): Promise<UserRoom> {
    const data = {
        userId,
        roomId,
    };
    const userRoom = await prisma.userRoom.create({ data });
    return userRoom;
}
