import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';

import { TransferResolver } from './gql/resolvers/transfer.resolver';

@Module({
  imports: [DomainModule],
  providers: [TransferResolver],
})
export class PresentationModule {}
