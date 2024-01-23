import { DocumentData } from '@angular/fire/compat/firestore';
import { Action } from '@ngrx/store';

export enum EProductActions {
  GetProducts = '[Products] Get Products',
  GetProductsSuccess = '[Products] Get Products Success',
}

export class GetProducts implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: DocumentData[]) {}
}

export type ProductsActions = GetProducts | GetProductsSuccess;
