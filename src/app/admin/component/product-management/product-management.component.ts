import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../productsModule/products-service/products.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { AlertService } from '../../../sharedModule/services/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {

  Subscriber: Subscription[] = [];
  products: any[] = [];

  constructor(
    private readonly productService: ProductService,
    private readonly modalService: NgbModal,
    private readonly fb: FormBuilder,
    private readonly alertService: AlertService
  ) {
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

}
