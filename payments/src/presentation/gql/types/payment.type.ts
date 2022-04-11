import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaymentType {
  @Field((type) => ID)
  id: string;

  @Field()
  barcode: string;
}
