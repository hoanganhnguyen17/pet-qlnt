import { Payment } from 'src/payment/domain/entity/payment.entity';
import { User } from 'src/user/domain/entity/user.entity';
import { ERoomStatus } from '../enum/room-status.enum';
import { ERoomType } from '../enum/room-type.enum';

export class Room {
    private id: number;
    private name: string;
    private status: ERoomStatus;
    private type: ERoomType;
    private price: number;
    private users: User[];
    private paymentStrategy: IPaymentStrategy;
    constructor() {}

    setPaymentStrategy(newStrategy: IPaymentStrategy) {
        this.paymentStrategy = newStrategy;
    }
}
