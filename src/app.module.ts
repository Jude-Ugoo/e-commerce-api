import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}
