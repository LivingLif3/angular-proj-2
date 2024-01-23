import { DocumentData } from '@angular/fire/compat/firestore';
import { Action } from '@ngrx/store';

export enum EProductActions {
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
}

export class GetProduct implements Action {
  public readonly type = EProductActions.GetProduct;
  constructor(public payload: string) {}
}

export class GetProductSuccess implements Action {
  public readonly type = EProductActions.GetProductSuccess;
  constructor(public payload: DocumentData) {}
}

export type ProductActions = GetProduct | GetProductSuccess;
