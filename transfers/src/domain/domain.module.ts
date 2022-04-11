import { Module } from '@nestjs/common';

import { InfraModule } from '../infra/infra.module';

import { TransferService } from './services';

@Module({
  imports: [InfraModule],
  exports: [TransferService],
  providers: [TransferService],
})
export class DomainModule {}
