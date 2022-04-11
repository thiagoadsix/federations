import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { TransferService } from '../../../domain/index';

import { TransferType } from '../types/transfer.type';

@Resolver((of) => TransferType)
export class TransferResolver {
  constructor(private readonly transferService: TransferService) {
    this.transferService = transferService;
  }

  @Mutation((returns) => Boolean!, { nullable: true })
  async transfer(
    @Args({ name: 'amount', type: () => Number! }) amount: number,
    @Args({ name: 'account', type: () => String! }) account: string,
  ): Promise<void> {
    await this.transferService.transfer(amount, account);
  }

  @Query((returns) => TransferType)
  async getTransfer(
    @Args({ name: 'id', type: () => String! }) id: string,
  ): Promise<TransferType> {
    return await this.transferService.get(id);
  }
}
