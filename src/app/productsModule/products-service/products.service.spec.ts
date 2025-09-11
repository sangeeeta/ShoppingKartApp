import { TestBed } from '@angular/core/testing';
import { ProductService } from './products.service';

describe('LeftMenuServiceService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
