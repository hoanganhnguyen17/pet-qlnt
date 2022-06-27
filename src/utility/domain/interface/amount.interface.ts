export abstract class IUtilityAmountStrategy {
    constructor(private readonly oldIndex: number, private readonly newIndex: number) {}
    abstract toAmount(): number;
}
