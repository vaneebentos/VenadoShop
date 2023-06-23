import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

/* Esta es una prueba unitaria para la clase 'Productservice'.La función `describir 'se usa para 
todas las pruebas relacionadas con la clase 'Productservice' se agrupan.*/
describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
