import { EUserGender } from '../enum/user-gender.enum';
import { EUserStatus } from '../enum/user-status.enum';
import { EUserType } from '../enum/user-type.enum';

export class User {
    protected id: number;
    protected status: EUserStatus;
    protected type: EUserType;
    protected firstName: string;
    protected lastName: string;
    protected gender: EUserGender;
    protected phoneNumber: number;
    protected dateOfBirth: Date;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getUserType() {
        return this.type;
    }
}
