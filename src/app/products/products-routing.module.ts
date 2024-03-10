import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListPageComponent,
  },
  {
    path: 'products/new',
    component: AddProductPageComponent,
  },
  {
    path: 'products/:id',
    component: DetailedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
