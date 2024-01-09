import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { productsReducers } from './products.reducers';

export const appReducers: ActionReducerMap<any, any> = {
  router: routerReducer,
  products: productsReducers,
};
