export class NormalPaymentStrategy implements IPaymentStrategy {
    calculatePayment(): number {
        return 10000;
    }
}
