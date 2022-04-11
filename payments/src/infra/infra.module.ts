import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentModel } from './db/typeorm/postgres/models';
import { PaymentRepository } from './db/typeorm/postgres/repositories';

const providers: Provider[] = [
  {
    provide: 'PaymentRepository',
    useClass: PaymentRepository,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([PaymentModel])],
  exports: [...providers],
  providers,
})
export class InfraModule {}
