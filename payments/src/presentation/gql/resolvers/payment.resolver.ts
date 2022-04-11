import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PaymentService } from '../../../domain/index';

import { PaymentType } from '../types/payment.type';

@Resolver((of) => PaymentType)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {
    this.paymentService = paymentService;
  }

  @Mutation((returns) => Boolean!, { nullable: true })
  async pay(
    @Args({ name: 'barcode', type: () => String! }) barcode: string,
  ): Promise<void> {
    await this.paymentService.pay(barcode);
  }

  @Query((returns) => PaymentType)
  async getPayment(
    @Args({ name: 'id', type: () => String! }) id: string,
  ): Promise<PaymentType> {
    return await this.paymentService.get(id);
  }
}
