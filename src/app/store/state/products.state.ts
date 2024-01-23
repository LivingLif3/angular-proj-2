import { DocumentData } from '@angular/fire/compat/firestore';

export interface IProductsState {
  products: DocumentData[] | null;
  product: DocumentData | null;
}

export const initialProductsState: IProductsState = {
  products: null,
  product: null,
};
