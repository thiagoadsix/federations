import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Payment, PaymentRepositoryInterface } from '../../../../../domain';

import { PaymentModel } from '../models';

@Injectable()
export class PaymentRepository implements PaymentRepositoryInterface {
  constructor(
    @InjectRepository(PaymentModel)
    private readonly repository: Repository<PaymentModel>,
  ) {
    this.repository = repository;
  }

  async get(id: string): Promise<Payment> {
    return await this.repository.findOne(id);
  }

  async pay(barcode: string): Promise<void> {
    const payment = this.repository.create({ barcode });
    await this.repository.save(payment);
  }
}
