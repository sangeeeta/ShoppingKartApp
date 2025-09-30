import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../products-service/products.service';
import { Subscription } from 'rxjs';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../sharedModule/services/alert.service';
import { responseCode } from '../../sharedModule/constants/responseCode';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productForm: any;
  private modalRef!: NgbModalRef;
  products: any[] = [];
  Subscriber: Subscription[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly alertService: AlertService
  ) {
    this.productForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      brand: ['', Validators.required],
      size: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]]
    });
  }


  ngOnInit() {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.Subscriber.push(
      this.productService.getProductsList().subscribe({
        next: (response: any) => {
          this.products = response.responseData.sort((a: any, b: any) =>
            a.name.localeCompare(b.name)
          );
        },
        error: (error) => {
          if (error.status === 400) {
            this.alertService.showAlert('danger', 'Product not fetched!');
          }
        }
      }));
  }

  deleteProduct(productId: number) {
    this.Subscriber.push(
      this.productService.deleteProduct(productId).subscribe({
        next: (response: any) => {
          if (response?.code === responseCode[200]) {
            console.log("Product deleted successfully:", response);
            this.alertService.showAlert('success', 'Product deleted successfully!');
            this.fetchAllProducts(); // Refresh the product list
          }
        },
        error: (error) => {
          console.error("Error deleting product:", error);
        }
      }));
  }

  // Open confirmation modal
  openConfirmModal(content: any, id: number) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        if (result === 'yes') {
          this.deleteProduct(id);
        }
      },
      () => {
        // dismissed
      }
    );
  }

  saveUpdateProduct() {
    if (this.productForm.valid) {
      const productData = { ...this.productForm.value };
      if (!productData.id || productData.id === 0) {//for new product
        delete productData.id;
      }
      this.productService.saveUpdateOrdrer(this.productForm.value).subscribe({
        next: (response: any) => {
          if (response?.code === responseCode[200]) {
            this.alertService.showAlert('success', 'Product saved successfully!');
            this.fetchAllProducts();
            this.closeModal();
          }
        },
        error: (error: { status: number; error: any; }) => {
          if (error.status === 400) {
            console.error("Bad Request Details:", error.error);
            this.alertService.showAlert('danger', 'Product not saved!');
          }
        }
      });
    }
  }

  prefillModal(product: any, productModal: any) {
    this.openModal(productModal);
    this.productForm.patchValue({
      id: product.id,
      name: product.name,
      price: product.price,
      brand: product.brand,
      size: product.size
    });
  }

  newProduct(isNew: boolean) {
    if (isNew) {
      this.productForm.reset();
      this.productForm.patchValue({ id: 0 });
    }
  }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content, { centered: true });
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.dismiss(); // or this.modalRef.close();
    }
  }

  ngOnDestroy() {
    this.Subscriber.forEach(sub => sub.unsubscribe());
  }

}
