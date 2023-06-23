import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  cartProducts: any[] = [];
  subTotal: number = 0;
  saleObj: any =  {
      "SaleId": 0,
      "CustId": 1,
      "SaleDate": new Date(),
      "TotalInvoiceAmount": 0,
      "Discount": 0,
      "PaymentNaration": "Patmm ",
      "DeliveryAddress1": "Plot nio 122",
      "DeliveryAddress2": "Ner ATM",
      "DeliveryCity": "Pune",
      "DeliveryPinCode": "440033",
      "DeliveryLandMark": "ATM"
  };
  /**
   * El constructor  toma un parámetro de tipo de productos de productos y la establece como un
   * Propiedad privada de la clase, el parámetro "Productservice" es una inyección de dependencia
   * de la clase "Productservice".Permite que la clase actual acceda a los métodos y propiedades de
   * La clase "Productservice", que puede usarse para realizar operaciones relacionadas con productos.
   */
  constructor(private productService: ProductService) {
    debugger;
  }
  ngOnInit(): void {
    this.loadCart();
  }

/* `loadCart ()` es un método que recupera los elementos del carrito, calcula el subtotal de
  todos los artículos del carrito iterando con el array de `CartProducts` y sumando el 'ProductPrice'
  de cada artículo,y almacena el subtotal en la propiedad 'Subtotal'*/
  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
        this.subTotal = this.subTotal + element.productPrice;
      });
      debugger;
    })
  }
 /* `RemoveTem (id: número)` es un método que toma un parámetro 'id' y llama al
 `removeCartItemById(id)` método del 'Productservice' para eliminar el elemento con el 'ID` especificado
 del carrito.Si la eliminación es exitosa, recarga el carrito llamando al método `loadcart ()`
 y emite un valor de 'verdadero' al sujeto 'cartAddedSubject` del' Productservice '.*/
  RemoveItem(id: number) {
    this.productService.removeCartItemById(id).subscribe((res: any) => {
      if (res.result) {
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
 
 /* `Makeale ()` es un método que se llama cuando el usuario hace clic en el botón ,llama al método `makesale ()` del
 `Productservice` para crear una nueva venta con el objeto 'saleObj` como parámetro.Si la venta es
 Exitoso, muestra un mensaje de alerta y recarga el carrito, emite un valor de `Verdadero '
 al sujeto `cartAddedSubject` del 'Productservice'.*/
  makeSale() {
    this.saleObj.TotalInvoiceAmount = this.subTotal;
    this.productService.cartAddedSubject.next(true);
    this.productService.makeSale( this.saleObj).subscribe((res: any) => {
      if (res.result) {
        alert("Compra Exitosa")
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
}
