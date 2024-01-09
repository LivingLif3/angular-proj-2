import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private firestore: Firestore,
  ) {}

  getProducts(): Observable<(DocumentData | NonNullable<DocumentData>)[]> {
    const collectionInstance = collection(this.firestore, 'products');
    return collectionData(collectionInstance).pipe((data) => {
      return data;
    });
  }
}
