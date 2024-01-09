import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ChooseColorComponent } from './choose-color/choose-color.component';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InlineProductCardComponent } from './inline-product-card/inline-product-card.component';
import { LatestProductCardComponent } from './latest-product-card/latest-product-card.component';

@NgModule({
  declarations: [
    ChooseSizeComponent,
    FavoriteComponent,
    LatestProductCardComponent,
    InlineProductCardComponent,
    ChooseColorComponent,
  ],
  exports: [
    ChooseSizeComponent,
    FavoriteComponent,
    LatestProductCardComponent,
    ChooseColorComponent,
    InlineProductCardComponent,
  ],
  imports: [CommonModule, NzIconModule],
})
export class SharedModule {}
