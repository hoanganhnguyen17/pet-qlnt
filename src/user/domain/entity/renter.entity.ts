import { Room } from 'src/room/domain/entity/room.entity';
import { EUserType } from '../enum/user-type.enum';
import { User } from './user.entity';

export class Renter extends User {
    private room: Room;
    type: EUserType.RENTER;
    constructor() {
        super();
    }
    setCurrentRoom(room: Room) {
        this.room = room;
    }
    getCurrentRoom() {
        return this.room;
    }
    pay() {}
}
