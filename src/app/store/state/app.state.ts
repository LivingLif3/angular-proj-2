import { RouterReducerState } from '@ngrx/router-store';

import { IProductsState, initialProductsState } from './products.state';

export interface IAppState {
  products: IProductsState;
  router?: RouterReducerState;
}

export const initialAppState: IAppState = {
  products: initialProductsState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
