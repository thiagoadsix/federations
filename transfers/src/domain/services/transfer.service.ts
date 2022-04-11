import { Inject, Injectable } from '@nestjs/common';

import { Transfer } from '../entities';
import { TransferRepositoryInterface } from '../repositories';

@Injectable()
export class TransferService {
  constructor(
    @Inject('TransferRepository')
    private readonly transferRepository: TransferRepositoryInterface,
  ) {
    this.transferRepository = transferRepository;
  }

  async transfer(amount: number, account: string): Promise<void> {
    await this.transferRepository.transfer(amount, account);
  }

  async get(id: string): Promise<Transfer> {
    return await this.transferRepository.get(id);
  }
}
