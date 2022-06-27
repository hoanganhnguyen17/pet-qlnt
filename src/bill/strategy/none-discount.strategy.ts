import { IDiscountStrategy } from '../interface/discount-strategy.interface';

export class NonDiscountStrategy extends IDiscountStrategy {
    constructor() {
        super(0, 0);
    }
}
