import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from './product';

enum PurchasesStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}
registerEnumType(PurchasesStatus, {
  name: 'PurchasesStatus',
  description: 'Available purchase statuses',
});
@ObjectType()
export class Purchases {
  @Field(() => ID)
  id: string;

  @Field(() => PurchasesStatus)
  status: PurchasesStatus;

  @Field(() => Product)
  product: Product;

  productId: string;

  @Field(() => Date)
  createdAt: Date;
}
