import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PurchasesService } from '../../../services/purchases.service';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { Purchases } from '../models/purchases';
import { ProductsService } from 'src/services/products.service';

@Resolver(() => Purchases)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesService,
    private productsService: ProductsService,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => [Purchases])
  purchases() {
    return this.purchasesService.listAllPurchases();
  }
  @ResolveField()
  product(@Parent() purchase: Purchases) {
    return this.productsService.getProductById(purchase.productId);
  }
}
