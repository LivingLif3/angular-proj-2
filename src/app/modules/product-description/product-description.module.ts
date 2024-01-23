import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { ZoomPhotoModule } from '../../core/directives/zoom-photo/zoom-photo.module';
import { TextSizePipe } from '../../core/pipes/text-size.pipe';
import { SharedModule } from '../../shared/shared.module';
import { ProductsModule } from '../products/products.module';

import { DescriptionComponent } from './components/description/description.component';
import { PhotoWithZoomComponent } from './components/photo-with-zoom/photo-with-zoom.component';
import { ProductDescriptionComponent } from './product-description.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDescriptionComponent,
  },
];

@NgModule({
  declarations: [ProductDescriptionComponent, PhotoWithZoomComponent, DescriptionComponent],
  imports: [
    CommonModule,
    ZoomPhotoModule,
    RouterModule.forChild(routes),
    NzCarouselModule,
    NzSpinModule,
    NzRateModule,
    FormsModule,
    SharedModule,
    NzButtonModule,
    ProductsModule,
    NzIconModule,
    TextSizePipe,
    NzDividerModule,
    NzCommentModule,
    NzAvatarModule,
  ],
})
export class ProductDescriptionModule {}
