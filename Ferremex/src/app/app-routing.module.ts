import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolamundoComponent } from './abrir/holamundo/holamundo.component';
import { AgregarComponent } from './auth/agregar/agregar.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactanosComponent } from './abrir/contactanos/contactanos.component';
import { ReporteComponent } from './abrir/reporte/reporte.component';
import { ProductosComponent } from './abrir/productos/productos.component';

const routes: Routes = [
  {path: '', component:ProductosComponent},
  {path:'login',component:LoginComponent},
  {path:'iniciar-sesion',component:DashboardComponent},
  {path:'holamundo',component:HolamundoComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'reportar',component:ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
