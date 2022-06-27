import { IUtilityAmountStrategy } from '../interface/amount.interface';
import { UtilityType } from '../types/UtilityType';

export class Utility {
    private amountStrategy: IUtilityAmountStrategy;
    private type: UtilityType;
    private oldIndex: number;
    private newIndex: number;

    constructor() {}

    setAmountStrategy(strategy: IUtilityAmountStrategy) {
        this.amountStrategy = strategy;
    }

    toAmount(): number {
        return this.amountStrategy.toAmount();
    }
}
