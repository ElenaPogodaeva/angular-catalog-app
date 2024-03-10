import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListPageComponent,
    DetailedPageComponent,
    ProductFormComponent,
    AddProductPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ProductListPageComponent],
})
export class ProductsModule {}
