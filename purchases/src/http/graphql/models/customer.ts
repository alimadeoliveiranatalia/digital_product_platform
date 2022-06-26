import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Purchases } from './purchases';

@ObjectType('User')
@Directive('@key(fields: "authUserId")')
export class Customer {
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => [Purchases])
  purchases: Purchases[];
}
