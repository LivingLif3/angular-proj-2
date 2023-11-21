import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((value) => value.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then((value) => value.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
