import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {
  @Input() products?: ProductModel[];

  constructor() {}

  ngOnInit(): void {}
}
