import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';

import { CustomCheckboxComponent } from '../../core/components/custom-checkbox/custom-checkbox.component';
import { CustomSelectComponent } from '../../core/components/custom-select/custom-select.component';
import { SharedModule } from '../../shared/shared.module';

import { AccessoryItemComponent } from './components/accessory-item/accessory-item.component';
import { ContentFilterBarComponent } from './components/content-filter-bar/content-filter-bar.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent, ContentFilterBarComponent, AccessoryItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzInputModule,
    NzIconModule,
    CustomSelectComponent,
    ReactiveFormsModule,
    NzSliderModule,
    NzCheckboxModule,
    CustomCheckboxComponent,
    NzSelectModule,
    NzRadioModule,
    NzPaginationModule,
    SharedModule,
  ],
  exports: [AccessoryItemComponent],
})
export class ProductsModule {}
