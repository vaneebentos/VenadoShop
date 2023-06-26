import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [

  {
/* Este bloque de código está definiendo una ruta para la ruta raíz de la aplicación.Cuando el usuario
    navega a la ruta de la raíz (es decir, la URL base de la aplicación), el homecomponent será
    desplegado.*/
    path: "",
    component: HomeComponent
  },
/* Este bloque de código está definiendo tres rutas adicionales para la aplicación.Cuando el usuario navega
A la ruta "/Productos", se mostrará el Homecomponent.Cuando el usuario navega a la ruta "/venta", 
Se mostrará salecomponente.*/
  {
    path: 'products',
    component: HomeComponent
  }, 
  {
    path: "sale",
    component: SaleComponent
  }
];

/* Esta es la clase ProbilizingModule que importa y exporta el RouterModule para el enrutamiento en un
Aplicación angular .*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
