import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadreComponent } from './shared/headre/headre.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { Header2Component } from './shared/header2/header2.component';
import { HolamundoComponent } from './abrir/holamundo/holamundo.component';
import { AgregarComponent } from './auth/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactanosComponent } from './abrir/contactanos/contactanos.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './abrir/productos/productos.component';
import { ReporteComponent } from './abrir/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadreComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    Header2Component,
    HolamundoComponent,
    AgregarComponent,
    ContactanosComponent,
    ProductosComponent,
    ReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
