import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup = {} as FormGroup;

  @Input() product: Product = {} as Product;

  @Output() save = new EventEmitter<Product>();

  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [this.product.id, Validators.required],
      title: [this.product.title, [Validators.required, Validators.maxLength(50)]],
      description: [this.product.description, [Validators.required, Validators.maxLength(500)]],
      price: [this.product.price, Validators.required],
      rating: [this.product.rating, Validators.required],
      thumbnail: [
        this.product.thumbnail,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
      ],
    });
  }

  onSubmit(): void {
    this.save.emit(this.productForm?.value);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
