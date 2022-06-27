import { IDiscountStrategy } from '../interface/discount-strategy.interface';
import { NonDiscountStrategy } from '../strategy/none-discount.strategy';

export class BillDetail {
    private amount: number;
    private discountStrategy: IDiscountStrategy;
    constructor() {
        this.setDiscountStrategy(new NonDiscountStrategy());
    }
    setDiscountStrategy(newStrategy: IDiscountStrategy) {
        this.discountStrategy = newStrategy;
    }
    getAmount() {
        return this.discountStrategy.toAmount(this.amount);
    }
    setAmount(amount: number) {
        this.amount = amount;
    }
}
