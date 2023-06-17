import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  // 2 EL FOR RECORRE ESTO
  productList: any [] = [];
  cartObj : any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-04-27T07:12:40.926Z"
  };

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
  }

  /**
   
   * 3 SE EJECUTA ESTA FUNCIÓN
  * The function loads all products by subscribing to the getAllProducts method of the productService
   * and assigning the result to the productList variable.
   * carga todos los productos mediante getAllProducts   */
  loadAllProducts() {
    debugger;
    this.productService.getAllProducts().
    subscribe((result: any)=>{
      this.productList = result.data;
    })
  }

/**
 * This function adds a product to the cart and notifies the user with an alert message.
 * @param {number} productId - a number representing the ID of the product that is being added to the cart.
 */
  addItemToCart(productId: number) {
/* Asigna el valor del parámetro 'productId` a la propiedad' ProductId` de
El objeto `cartObj`.Esto se realiza en la función `addItemTocart ', es llamada cuando un usuario
haga clic en el botón "Agregar al carrito" para un producto específico.El objeto `cartObj` se pasa a
El método `addToCart` del` Productservice`, que agrega el producto al carrito del usuario. */
    this.cartObj.ProductId = productId;
    // addToCart función de la clase productService (inyectada mediante el constructor) que envía una solicitud HTTP POST para agregar un elemento al carrito en un sitio web de comercio electrónico.
  /* This code is calling the `addToCart` function of the `ProductService` class, passing in the
  `cartObj` object as a parameter. It then subscribes to the observable returned by the `addToCart`
  function and waits for a response. If the response has a `result` property that is truthy, it
  displays an alert message saying "Producto añadido al carrito" (which means "Product added to
  cart" in Spanish) and emits a `cartAddedSubject` event using the `next` method of the
  `cartAddedSubject` observable of the `ProductService` class. 
  
  
  */
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
       if(result.result) {
        alert("Producto añadido al carrito");
        this.productService.cartAddedSubject.next(true);
       }
    })
  }
}
