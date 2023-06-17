import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [

  {
/* Este bloque de código está definiendo una ruta para la ruta raíz de la aplicación.Cuando el usuario
    navega a la ruta de la raíz (es decir, la URL base de la aplicación), el homecomponente será
    desplegado.*/
    path: "",
    component: HomeComponent
  },
/* Este bloque de código está definiendo tres rutas adicionales para la aplicación.Cuando el usuario navega
A la ruta "/Productos", se mostrará el Homecomponent.Cuando el usuario navega al "/carrito"
ruta, se mostrará el CartComponent.Cuando el usuario navega a la ruta "/venta", la
Se mostrará salecomponente.*/
  {
    path: 'products',
    component: HomeComponent
  }, 
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: "sale",
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
