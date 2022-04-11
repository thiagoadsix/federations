import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransferModel } from './db/typeorm/postgres/models';
import { TransferRepository } from './db/typeorm/postgres/repositories';

const providers: Provider[] = [
  {
    provide: 'TransferRepository',
    useClass: TransferRepository,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([TransferModel])],
  exports: [...providers],
  providers,
})
export class InfraModule {}
