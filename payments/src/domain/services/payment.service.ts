import { Inject, Injectable } from '@nestjs/common';
import { Payment } from '../entities';
import { PaymentRepositoryInterface } from '../repositories';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PaymentRepository')
    private readonly paymentRepository: PaymentRepositoryInterface,
  ) {
    this.paymentRepository = paymentRepository;
  }

  async pay(barcode: string): Promise<void> {
    await this.paymentRepository.pay(barcode);
  }

  async get(id: string): Promise<Payment> {
    return await this.paymentRepository.get(id);
  }
}
