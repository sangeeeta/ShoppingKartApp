import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../products-service/products.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private readonly productService: ProductService) {}
  products: any;
  Subscriber: Subscription[] = [];

  ngOnInit() {
    console.log("ProductsComponent initialized");
    this.fetchAllProducts();
  }


  fetchAllProducts() {
    console.log("Fetching all products...");
    this.Subscriber.push(
      this.productService.getProductsList().subscribe({
        next: (response) => {
          console.log("Products fetched successfully:", response);
          this.products = response;
        },
        error: (error) => {
          console.error("Error fetching products:", error);
          if (error.status === 400) {
            console.error("Bad Request Details:", error.error);
          }
        }
      }));
  }


  ngOnDestroy() {
    // Clean up all subscriptions
    this.Subscriber.forEach(sub => sub.unsubscribe());
  }

}
