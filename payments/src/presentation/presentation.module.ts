import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';

import { PaymentResolver } from './gql/resolvers/payment.resolver';

@Module({
  imports: [DomainModule],
  providers: [PaymentResolver],
})
export class PresentationModule {}
