import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss'],
})
export class AddProductPageComponent {
  constructor(
    private router: Router,
    private productService: ProductService,
  ) {}

  onSubmit(product: Product) {
    const product$ = this.productService.createProduct(product);
    product$.subscribe(() => this.router.navigate(['/products']));
  }

  onCancel() {
    this.router.navigate(['/products']);
  }
}
