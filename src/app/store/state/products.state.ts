import { IProduct } from '../../core/types/IProduct';

export interface IProductsState {
  products: IProduct[] | null;
}

export const initialProductsState: IProductsState = {
  products: null,
};
