import { Module } from '@nestjs/common';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { BillModule } from './bill/bill.module';
import { UtilityModule } from './utility/utility.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [RoomModule, UserModule, PaymentModule, BillModule, UtilityModule, AuthModule],
})
export class AppModule {}
