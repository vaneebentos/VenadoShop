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

 /* `CartoBj` es un objeto que representa un elemento de carrito.Tiene propiedades como `Cartid`,` custid`,
 `Productid`,` cantidad 'y `date'.Estas propiedades se utilizan para agregar un producto al carrito al
 asignar el parámetro `ProductId` a la propiedad` productId` de 'cartObj` y pasarlo al
 Método `AddTocart` de la clase 'Productservice`.
 */
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
    this.loadAllProducts();
  }

  /**
   
   * 3 SE EJECUTA ESTA FUNCIÓN
  * The function loads all products by subscribing to the getAllProducts method of the productService
   * and assigning the result to the productList variable.
   * carga todos los productos mediante getAllProducts   */
  loadAllProducts() {
    this.productService.getAllProducts().
    subscribe((result: any)=>{
      this.productList = result.data;
    })
  }

/**
 * esta función agrega un producto al carrito notificando al usuario con un mensaje en un alert.
 * @param {number} productId - un número que representa el ID del producto que se está agregando al carrito.
 */
  addItemToCart(productId: number) {
/* Asigna el valor del parámetro 'productId` a la propiedad' ProductId` de
El objeto `cartObj`.Esto se realiza en la función `addItemTocart ', es llamada cuando un usuario
haga clic en el botón "Agregar al carrito" para un producto específico.El objeto `cartObj` se pasa aL método `addToCart` del` Productservice`, que agrega el producto al carrito del usuario. */
    this.cartObj.ProductId = productId;
  // addToCart función de la clase productService (inyectada mediante el constructor) que envía una solicitud HTTP POST para agregar un elemento al carrito en un sitio web de comercio electrónico.
  
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
      debugger;
        alert("Producto añadido al carrito");
        this.productService.cartAddedSubject.next(true);
    })
  }
}
