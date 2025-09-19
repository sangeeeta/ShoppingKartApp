import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrls } from '../../sharedModule/constants/apiUrl';
import { environment } from '../../../environments/environment';

export interface Product {
  id: number;
  product_id: number;
  name?: string;
  address?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }
  private baseUrl = environment.API_URL;
  contentType = 'application/json';

  // Get all products
  getProductsList() {
    const url = `${this.baseUrl}/${apiUrls.getAllProducts}`;
    return this.http.get(url, {});
  }

  // Get a single product by ID
  getProductsById(id: number) {
    const url = `${this.baseUrl}/${apiUrls.getProductById}`;
    const header = new HttpHeaders({
      'content-type': this.contentType
    });
    const productId = { id: id };
    const requestBody = JSON.stringify(productId);
    return this.http.post(url, requestBody, { headers: header });
  }

  //Save product
  saveUpdateOrdrer(product: Product) {
    const url = `${this.baseUrl}/${apiUrls.saveUpdateOrdrer}`;
    const header = new HttpHeaders({
      'content-type': this.contentType
    });
    const requestBody = JSON.stringify(product);
    return this.http.post(url, requestBody, { headers: header });
  }
  // Delete product by ID
  deleteProduct(id: number) {
    const url = `${this.baseUrl}/${apiUrls.deleteOrder}`;
    const header = new HttpHeaders({
      'content-type': this.contentType
    });
    const productId = { id: id };
    const requestBody = JSON.stringify(productId);
    return this.http.delete(url, { headers: header, body: requestBody });
  }
}
