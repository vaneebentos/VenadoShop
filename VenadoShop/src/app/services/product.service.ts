import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/* `@Injectable({ providedIn: 'root' })` es un decorador en angular que permite que el servicio sea
proporcionado en el  de la aplicación.Esto significa que el servicio está disponible para todos
componentes y módulos en la aplicación sin la necesidad de configuración adicional.Es un
forma abreviada de registrar un servicio con el inyector raíz.*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {

/* `public cartAddedSubject ` esñ una propiedad de la clase 'Productservice' que crea una nueva instancia de
La clase `Subject 'con un parámetro de tipo booleano,se usa para emitir eventos y
notificar  a los suscriptores cuando se agrega un producto al carrito.
El `cartAddedSubject ` se puede suscribir en otros componentes o servicios para recibir 
actualizaciones cuando se agrega un producto al carrito.*/
  public cartAddedSubject = new Subject<boolean>();

/**
* Esta es una función de constructor que toma en una instancia de la clase httpclient como parámetro y
 * lo asigna a una propiedad privada.
 * @param {httpclient} http - el parámetro `http` es una instancia de la clase` httpclient`, que se utiliza para 
 * realizar solicitudes HTTP en aplicaciones de angular.Le permite enviar solicitudes a
 * un servidor y recibir respuestas en una variedad de formatos, como JSON, XML o texto plano.
 */
  constructor(private http: HttpClient) { }

/**
* Esta función devuelve un observable que recupera todos los productos de un endpoint especificado.
 * @returns una observable de un array de cualquier tipo, que representa la respuesta del HTTP Get
 * Solicitud a la URL especificada.
 */

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
  }

 /**
  * Esta función envía una solicitud HTTP POST para agregar un elemento al carrito en un sitio web de comercio electrónico.
  * @param {any} obj: el parámetro "obj" es de tipo "any" y es el objeto que contiene los datos 
  * se enviará en la HTTP POST request a la URL especificada.Podría ser cualquier tipo de objeto, pero
  * Debería estar en el formato esperado por el endpoint.
  * @returns Se está devolviendo un tipo de tipo `Any`.
  */
  addToCart(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",obj);
  }


/**
 * Esta función recupera los elementos del carrito por ID del cliente a través de una solicitud HTTP GET.
 * @param {number} custid: la identificación del cliente es un número que se utiliza para identificar a un cliente específico en un ecommerce .
 * Esta función se utiliza para recuperar todos los artículos en el cart component.
 * @returns una observable de una array de cualquier tipo de datos.
 */
  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=" + custId);
  }
/**
 * Esta función envía una solicitud HTTP GET a un endpoint de la API para eliminar un producto de un carrito por su id.
 * @param {número} Cartid: un número que representa la ID del elemento que se eliminará del CART.
 * @returns Se está devolviendo una array de cualquier tipo.
 */
   removeCartItemById(cartId: number) : Observable<any[]>  {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id=" + cartId);
  }

/**
 * La función realiza una venta enviando una solicitud HTTP POST a un endpoint de la API.
 * @param {any} obj: el parámetro "obj" es de tipo "any" y son los datos que deben enviarse en la
 * solicitud HTTP POST a la URL especificada.
* @returns Un observable del tipo `any` está siendo devuelto. */
  makeSale(obj: any) : Observable<any> {
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale",obj);
  }
}
