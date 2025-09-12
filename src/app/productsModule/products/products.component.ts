import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../products-service/products.service';
import { Subscription } from 'rxjs';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private readonly productService: ProductService, private modalService: NgbModal) { }
  products: any;
  Subscriber: Subscription[] = [];
  isModalOpen = false;

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

   saveProduct() {
    // if (this.productForm.valid) {
    //   console.log('Product saved:', this.productForm.value);
    //   this.modalService.dismissAll(); // close modal after save
    // }
  }

  openModal() {
    console.log("Opening modal");
    this.isModalOpen = true;
     //this.modalService.open(content, { size: 'lg', centered: true });
    //this.productForm.reset(); // optional
  }

  closeModal() {
    console.log("Closing modal");
    this.isModalOpen = false;
  }

  ngOnDestroy() {
    // Clean up all subscriptions
    this.Subscriber.forEach(sub => sub.unsubscribe());
  }

}
