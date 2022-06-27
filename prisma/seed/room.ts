import { Room } from '@prisma/client';
import { faker } from '@faker-js/faker';

export default async function generateRoom(prisma): Promise<Room> {
    const data = {
        name: faker.random.word(),
        status: faker.datatype.boolean(),
        type: faker.datatype.number({ min: 0, max: 1 }),
        price: faker.datatype.number({ min: 1000000, max: 2000000 }),
    };
    const room = await prisma.room.create({ data });
    return room;
}
