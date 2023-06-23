import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Venado Shop';
  cartProducts: any[] = [];
  subTotal: number = 0;
 /* El constructor inyecta dos dependencias: `Productservice` del tipo 'Productservice' y
  `router` del tipo` Router '.Despues se suscribe al 'cartAddedSubject'  de
  `Productservice` y llama al método` loadCart () `siempre que se agrega un nuevo elemento al carrito.Este
  se encarga  que el carrito siempre esté actualizado.*/
  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe(res=> {
      this.loadCart();
    })
  }

 /**
  ngOnInit carga el carrito.
  */
  ngOnInit(): void {
    this.loadCart();
  }
  
  /**
   * Esta función redirige al usuario a la página de venta utiliza el router .
   */
  redirectToSale() {
    this.router.navigateByUrl("/sale");
  }

  loadCart() {
  /* Este código está cargando los elementos del carrito para un cliente específico (ID de cliente 1) utilizando el
   `getCartItemsByCustId()` Método del 'Productservice'.Luego calcula el subtotal de todos
    los productos en el carrito iterando a través del array de `CartProducts` y sumando el valor
    de  `ProductPrice` de cada elemento.El subtotal se almacena en la variable `subtotal`.*/
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: any)=> {
      this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
          this.subTotal =  this.subTotal + element.productPrice;
      });
    })
  }
}
