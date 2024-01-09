import { EProductActions, ProductsActions } from '../actions/products.actions';
import { IProductsState, initialProductsState } from '../state/products.state';

export const productsReducers = (
  state = initialProductsState,
  action: ProductsActions,
): IProductsState => {
  console.trace(state);
  switch (action.type) {
    case EProductActions.GetProductsSuccess:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
