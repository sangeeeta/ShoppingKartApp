import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../products-service/products.service';
import { Subscription } from 'rxjs';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productForm: any;

  constructor(private readonly productService: ProductService, private modalService: NgbModal, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      size: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]]
    });
  }
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
    if (this.productForm.valid) {
      console.log('Form Values:', this.productForm.value);
      // here you could push to products array or send to API
    }
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
