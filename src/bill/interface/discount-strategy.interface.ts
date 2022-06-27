export abstract class IDiscountStrategy {
    constructor(private readonly moneyDiscount: number, private readonly percentDiscount: number) {}
    toAmount(cash: number): number {
        if (this.moneyDiscount) {
            if (this.moneyDiscount >= cash) {
                return 0;
            }
            return cash - this.moneyDiscount;
        }
        if (this.percentDiscount) {
            if (this.percentDiscount >= 100) {
                return 0;
            }
            return cash - cash * (this.percentDiscount / 100);
        }
    }
}
