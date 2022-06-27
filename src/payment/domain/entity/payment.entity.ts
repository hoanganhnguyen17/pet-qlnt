import { Bill } from 'src/bill/entity/bill.entity';
import { EPaymenType } from '../enum/payment-type.enum';

export class Payment {
    private received: number;
    private change: number;
    private amount: number;
    private paymentType: EPaymenType;
    private bill: Bill;

    constructor(amount: number) {
        this.amount = amount;
    }

    receivePayment(receivePayment: number, bill: Bill) {
        this.received = receivePayment;
        this.change = this.received - this.amount;
    }
}
