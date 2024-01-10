import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { IAccessory, ICheckbox, ISelect } from '../../core/types/ContentFilterBarTypes';
import { IProduct } from '../../core/types/IProduct';
import { GetProducts } from '../../store/actions/products.actions';
import { selectProductsList } from '../../store/selectors/products.selectors';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  sortedValueForm!: FormGroup;

  products$ = this._store.pipe(select(selectProductsList));
  manipulatedProducts: any = [];
  currentProducts: any = [];

  pageIndex: number = 0;

  itemsPerPage: number = 20;

  sortFunctions = {
    popularity: this.compareFunctionForPopularity,
    cost: this.compareFunctionForPrice,
  };

  accessories: IAccessory[] = [
    {
      title: 'Accessories',
      subTitles: ['View All', 'Bags', 'Belts', 'Cosmetics', 'Hats', 'Jewelry'],
    },
    {
      title: 'Bags',
      subTitles: ['View All', 'Man', 'Woman'],
    },
    {
      title: 'Clothing',
      subTitles: ['View All', 'Man', 'Woman'],
    },
    {
      title: 'Entertainment',
      subTitles: ['View All', 'Disco', 'Cinema', 'Theatre', 'Shopping', 'Reading', 'Museum'],
    },
    {
      title: 'Furniture & Decor',
      subTitles: ['View All', 'Sofa', 'Chair', 'Table'],
    },
    {
      title: 'Gadgets',
      subTitles: ['View All', 'Lap top', 'Phone', 'TV', 'Computer', 'Scanner'],
    },
    {
      title: 'Shoes',
      subTitles: ['View All', 'Man', 'Woman'],
    },
  ];

  colors: ISelect = {
    title: 'Color',
    items: ['Red', 'Blue', 'Brown', 'Orange', 'Yellow', 'Pink'],
  };

  sizes: ISelect = {
    title: 'Size',
    items: ['EL', 'L', 'M', 'S', 'ES'],
  };

  brands: ICheckbox = {
    label: 'Brand',
    items: [
      { value: 'Adidas', count: 11 },
      { value: 'Armani', count: 23 },
      { value: 'Calvin Klein', count: 12 },
      { value: 'Columbia', count: 4 },
      { value: 'Converse', count: 22 },
      { value: 'Dockers', count: 103 },
    ],
  };

  constructor(
    private _store: Store<IAppState>,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetProducts());

    this.sortedValueForm = this.fb.group({
      sortedValue: [''],
      orientation: ['column'],
    });

    this.sortedValueForm
      .get('sortedValue')
      ?.valueChanges.subscribe((value: 'popularity' | 'cost') => {
        this.currentProducts.sort(this.sortFunctions[value]);
      });
  }

  compareFunctionForPopularity(a: IProduct, b: IProduct) {
    return a.popularity - b.popularity;
  }

  compareFunctionForPrice(a: IProduct, b: IProduct) {
    return a.price - b.price;
  }

  check(data: any) {
    this.manipulatedProducts = data;
    this.changeCurrentProducts(this.pageIndex);
  }

  onChangePage(pageIndex: number) {
    this.pageIndex = pageIndex - 1;
    this.changeCurrentProducts(this.pageIndex);
  }

  changeCurrentProducts(pageIndex: number) {
    this.currentProducts = this.manipulatedProducts.slice(
      pageIndex * this.itemsPerPage,
      (pageIndex + 1) * this.itemsPerPage,
    );
  }
}
