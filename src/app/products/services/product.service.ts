import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Product, ProductsResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly PRODUCTS_URL = 'products';

  private readonly LIMIT = 10;

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<Product[]> {
    const params = new HttpParams()
      .set('skip', (page * this.LIMIT).toString())
      .set('limit', this.LIMIT.toString());

    return this.http.get<ProductsResponse>(this.PRODUCTS_URL, { params }).pipe(
      map((response) => response.products),
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.PRODUCTS_URL}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  createProduct(product: Product): Observable<Product> {
    const url = `${this.PRODUCTS_URL}/add`;
    return this.http.post<Product>(url, product);
  }
}
