import { EUserType } from '../enum/user-type.enum';
import { User } from './user.entity';

export class Owner extends User {
    type: EUserType.OWNER;
}
