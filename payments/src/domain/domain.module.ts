import { Module } from '@nestjs/common';

import { InfraModule } from '../infra/infra.module';

import { PaymentService } from './services';

@Module({
  imports: [InfraModule],
  exports: [PaymentService],
  providers: [PaymentService],
})
export class DomainModule {}
