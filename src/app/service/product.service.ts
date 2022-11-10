import { Injectable } from '@angular/core';
import { Product, ProductDto } from '../model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = 'https://dummyjson.com/products';
  }

  public getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  public getProduct() {
    return this.http.get<Product>(this.productUrl, {
      headers: this.getHeaders(),
    });
  }
}
