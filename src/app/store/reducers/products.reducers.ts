import {
  EProductActions as EConcreteProductActions,
  ProductActions,
} from '../actions/product.actions';
import { EProductActions, ProductsActions } from '../actions/products.actions';
import { IProductsState, initialProductsState } from '../state/products.state';

export const productsReducers = (
  state = initialProductsState,
  action: ProductsActions | ProductActions,
): IProductsState => {
  console.trace(state);
  switch (action.type) {
    case EProductActions.GetProductsSuccess:
      return {
        ...state,
        products: action.payload,
      };
    case EConcreteProductActions.GetProductSuccess:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
