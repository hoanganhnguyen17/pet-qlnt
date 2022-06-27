import { PrismaClient } from '.prisma/client';
import { faker } from '@faker-js/faker';
import { generateDefaultUser } from './seed/role';
import generateRoom from './seed/room';
import generateUser, { generateUserRoom } from './seed/user';

const prisma = new PrismaClient();

async function main() {
    //seed rooms and users
    // for (let i = 0; i < 45; i++) {
    //     const room = await generateRoom(prisma);
    //     const numberOfUser = faker.datatype.number({ min: 1, max: 4 });
    //     for (let j = 0; j < numberOfUser; j++) {
    //         const user = await generateUser(prisma);
    //         await generateUserRoom(prisma, room.id, user.id);
    //     }
    // }
    //seed admin & roles
    await generateDefaultUser(prisma);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
