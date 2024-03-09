import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

@NgModule({
  declarations: [ProductItemComponent, ProductListPageComponent],
  imports: [CommonModule, ProductsRoutingModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [ProductListPageComponent, ProductItemComponent],
})
export class ProductsModule {}
