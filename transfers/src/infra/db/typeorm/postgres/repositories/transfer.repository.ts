import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Transfer, TransferRepositoryInterface } from '../../../../../domain';

import { TransferModel } from '../models';

@Injectable()
export class TransferRepository implements TransferRepositoryInterface {
  constructor(
    @InjectRepository(TransferModel)
    private readonly repository: Repository<TransferModel>,
  ) {
    this.repository = repository;
  }

  async get(id: string): Promise<Transfer> {
    return await this.repository.findOne(id);
  }

  async transfer(amount: number, account: string): Promise<void> {
    const transfer = this.repository.create({ amount, account });
    await this.repository.save(transfer);
  }
}
