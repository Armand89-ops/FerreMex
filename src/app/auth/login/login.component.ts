import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  usuario: any;

  datosU={
    nombre:"",
    correo:"",
    contrasena:"",
  }


  constructor(private conexionServicio: ConexionService,private router:Router) {}
  ngOnInit(){
    this.recuperarTodos();
    
}
hayRegistros() {
  return true;
} 
recuperarTodos() {
  this.conexionServicio.recuperarTodos().subscribe((result:any) => this.usuario = result);
}

seleccionar(correo:any,contrasena:any) {
  this.conexionServicio.seleccionar(correo, contrasena).subscribe(
    (result: any) => {
      this.datosU = result[0];
      this.conexionServicio.setDatos(result[0]);
      this.router.navigate(['/holamundo']);
    },
    (error: any) => {
      console.error('Error en la autenticación:', error);
    }
  );
  }
}
