import { IUtilityAmountStrategy } from '../interface/amount.interface';

export class ElectricityAmountStrategy extends IUtilityAmountStrategy {
    constructor(oldIndex: number, newIndex: number) {
        super(oldIndex, newIndex);
    }
    toAmount(): number {
        return 0;
    }
}
