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
  constructor(private readonly productService: ProductService) { }
  products: any;
  Subscriber: Subscription[] = [];

  // Define the expected response type
  private static readonly defaultResponse = { responseData: [] };

  ngOnInit() {
    console.log("ProductsComponent initialized");
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    console.log("Fetching all products...");

     this.Subscriber.push(
      this.productService.getProductsList().subscribe({
        next: (response: any) => {
          console.log("Products fetched successfully:", response);
          this.products = response.responseData;
        },
        error: (error) => {
          console.error("Error fetching products:", error);
          if (error.status === 400) {
            console.error("Bad Request Details:", error.error);
          }
        }
      }));



    // this.Subscriber.push(this.productService.getProductsList().subscribe(
    //   (response: any) => {
    //     console.log("Products fetched successfully:", response);
    //     this.products = response.responseData;
    //   },
    //   (error: any) => {
    //     console.error("Error fetching products:", error);
    //     if (error.status === 400) {
    //       console.error("Bad Request Details:", error.error);
    //     }
    //   }
    // ));


    
  }

  editProduct(productId: number) {
    console.log("Edit product functionality to be implemented.");
  }

  deleteProduct(productId: number) {
    console.log(`Deleting product with ID: ${productId}`);
    this.Subscriber.push(
      this.productService.deleteProduct(productId).subscribe({
        next: (response) => {
          console.log("Product deleted successfully:", response);
          this.fetchAllProducts(); // Refresh the product list
        },
        error: (error) => {
          console.error("Error deleting product:", error);
        }
      }));
  }


  ngOnDestroy() {
    // Clean up all subscriptions
    this.Subscriber.forEach(sub => sub.unsubscribe());
  }

}
