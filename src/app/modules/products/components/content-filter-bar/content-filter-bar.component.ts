import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IAccessory, ICheckbox, ISelect } from '../../../../core/types/ContentFilterBarTypes';
import { IFilterFormValue } from '../../../../core/types/IFilterFormValue';
import { IProduct } from '../../../../core/types/IProduct';

@Component({
  selector: 'app-content-filter-bar',
  templateUrl: './content-filter-bar.component.html',
  styleUrls: ['./content-filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFilterBarComponent implements OnInit, OnChanges {
  @Input() products!: IProduct[] | null;
  @Input() accessories!: IAccessory[];
  @Input() colors!: ISelect;
  @Input() sizes!: ISelect;
  @Input() brands!: ICheckbox;
  manipulatedProducts: IProduct[] | null = [];
  @Output() productsChange = new EventEmitter<IProduct[]>();

  selectValue: FormGroup = this.fb.group({
    search: [''],
    selectedTypeOfProduction: [''],
    selectedColor: [''],
    selectedSize: [''],
    price: [[0, 1000]],
    brand: [{}],
  });

  handlers: any = {
    search: this.filterBySearchInput,
    selectedColor: this.filterByColor,
    selectedSize: this.filterBySize,
    price: this.filterByPrice,
    brand: this.filterByBrand,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.selectValue.valueChanges.subscribe((formValue: IFilterFormValue) => {
      this.productsChange.emit(this.chainChecking(formValue));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.manipulatedProducts = this.products;
      this.productsChange.emit(this.manipulatedProducts!);
    }
  }

  chainChecking(formValue: any) {
    let localCopyOfProducts = [...(this.products as Array<IProduct>)];
    for (const key in formValue) {
      if (this.handlers[key]) {
        localCopyOfProducts = this.handlers[key](localCopyOfProducts, formValue[key]);
      }
    }
    return localCopyOfProducts;
  }

  filterBySearchInput(products: any, value: string) {
    return products.filter((product: IProduct) =>
      product.title.toLowerCase().includes(value.toLowerCase()),
    );
  }

  filterByPrice(products: any, prices: number[]) {
    return products.filter(
      (product: IProduct) => product.price >= prices[0] && product.price <= prices[1],
    );
  }

  filterByColor(products: any, color: string) {
    if (!color) {
      return products;
    }
    return products.filter((product: IProduct) => product.colors.includes(color.toLowerCase()));
  }

  filterBySize(products: any, size: string) {
    if (!size) {
      return products;
    }
    return products.filter((product: IProduct) => product.size.includes(size));
  }

  filterByBrand(products: any, brands: any) {
    const copyOfProducts = [...products];
    let returnBrands: any = [];
    for (const key in brands) {
      if (brands[key]) {
        returnBrands = [
          ...returnBrands,
          ...copyOfProducts.filter((product: IProduct) => product.brand === key.toLowerCase()),
        ];
      }
    }
    let checkingFlag: boolean = false;
    Object.values(brands).forEach((value: any) => {
      // Тут проверяем, что хотя бы 1 чекбокс выбран
      checkingFlag ||= value;
    });
    if (!checkingFlag) {
      return copyOfProducts;
    }
    return returnBrands;
  }
}
