import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IProductsState } from '../state/products.state';

const productsSelectors = (state: IAppState) => state.products;

export const selectProductsList = createSelector(
  productsSelectors,
  (state: IProductsState) => state.products,
);

export const selectProduct = createSelector(
  productsSelectors,
  (state: IProductsState) => state.product,
);
