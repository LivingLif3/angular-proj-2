import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ButtonComponent } from './components/button/button.component';
import { ChooseSizeComponent } from './components/choose-size/choose-size.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FeaturedProductCardComponent } from './components/featured-product-card/featured-product-card.component';
import { LatestProductCardComponent } from './components/latest-product-card/latest-product-card.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ButtonComponent,
    FeaturedProductCardComponent,
    LatestProductCardComponent,
    ChooseSizeComponent,
    FavoriteComponent,
  ],
  exports: [ButtonComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NzDividerModule, NzIconModule],
})
export class HomeModule {}
