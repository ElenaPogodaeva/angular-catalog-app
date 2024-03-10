import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListPageComponent,
  },
  {
    path: ':id',
    component: DetailedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
