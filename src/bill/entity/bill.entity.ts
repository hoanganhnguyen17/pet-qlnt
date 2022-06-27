import { BillDetail } from './bill-detail.entity';

export class Bill {
    private period: Date;
    private billDetails: BillDetail[];

    getTotal() {
        return this.billDetails.reduce((sum, billDetail) => sum + billDetail.getAmount(), 0);
    }
}
