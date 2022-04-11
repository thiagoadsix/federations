import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TransferType {
  @Field((type) => ID)
  id: string;

  @Field()
  amount: number;

  @Field()
  account: string;
}
