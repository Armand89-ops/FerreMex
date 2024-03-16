import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConexionService {

  private datos:any;

  setDatos(data:any){
    this.datos = data;
  }

  getDatos(){
    return this.datos;
  }

  //url='https://proyectoferremex.000webhostapp.com/php/';
  //urli='https://ferritomyx.000webhostapp.com/php/';
  url='http://localhost/php/';
  constructor(public http: HttpClient) { }

  registrar(usuario: any){
    alert("Datos registrados");
    console.log(JSON.stringify(usuario));
    console.log(this.url);
    return this.http.post(`${this.url}registrar.php`, JSON.stringify(usuario));
  }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }
  seleccionar(correo: any, contrasena: any): Observable<any> {
    return this.http.get(`${this.url}seleccionar.php?correo="${correo}"&contrasena="${contrasena}"`);
  }
}