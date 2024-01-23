import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private firestore: Firestore,
    private db: AngularFirestore,
  ) {}

  getProducts(): Observable<(DocumentData | NonNullable<DocumentData>)[]> {
    const collectionInstance = collection(this.firestore, 'products');
    return collectionData(collectionInstance, { idField: 'id' }).pipe((data) => {
      return data;
    });
  }

  getProduct(productId: string) {
    const collectionInstance = collection(this.firestore, 'products');
    return collectionData(collectionInstance, { idField: 'id' }).pipe(
      map((elements) => elements.find((el) => el.id === productId)),
      mergeMap((element) => {
        return this.db
          .collection('products')
          .doc(productId)
          .collection('product')
          .valueChanges()
          .pipe(map((el) => ({ ...element, ...el[0] })));
      }),
    );
  }
}
