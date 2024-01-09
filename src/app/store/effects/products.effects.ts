import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, switchMap } from 'rxjs';

import { ProductsService } from '../../core/services/ProductsService/products.service';
import { EProductActions, GetProducts, GetProductsSuccess } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  getProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetProducts>(EProductActions.GetProducts),
      switchMap(() => this.productsService.getProducts()),
      switchMap((products) => of(new GetProductsSuccess(products))),
    ),
  );

  constructor(
    private _actions$: Actions,
    private productsService: ProductsService,
  ) {}
}
