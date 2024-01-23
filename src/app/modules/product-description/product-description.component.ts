import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IAccessory } from '../../core/types/ContentFilterBarTypes';
import { GetProduct } from '../../store/actions/product.actions';
import { selectProduct } from '../../store/selectors/products.selectors';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDescriptionComponent implements OnInit {
  id: number | null = null;

  products$ = this._store.select(selectProduct);

  currentProduct: any = null;

  selectedSection: string = 'description';

  accessoryItemsTitles: any = {
    composition: 'Composition',
    shippingOptions: 'Shipping options',
    localStores: 'Find in local stores',
  };
  accessoryItems: IAccessory[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._store.dispatch(new GetProduct(params.get('id')!));
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationCancel) {
        this.currentProduct = null;
      }
    });

    this.products$.subscribe((product) => {
      this.accessoryItems = [];
      this.currentProduct = product;
      for (const key in this.accessoryItemsTitles) {
        this.accessoryItems = [
          ...this.accessoryItems,
          {
            title: this.accessoryItemsTitles[key],
            subTitles: this.currentProduct[key],
          },
        ];
      }
      this.ref.markForCheck();
    });
  }
}
