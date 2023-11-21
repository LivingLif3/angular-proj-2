import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentFilterBarComponent } from './components/content-filter-bar/content-filter-bar.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent, ContentFilterBarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
