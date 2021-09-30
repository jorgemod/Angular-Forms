import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  cliente = {
    nombre : "Jorge",
    apellido : "Juárez",
    correo: "coqueju97@gmail.com",
    pais: ""
  };
  paisess : any[] ;
  //injeccion del servicio de paises
  constructor(private paises: PaisService) { }

  ngOnInit(): void {
    //nos suscripbimos al observable que nos manda la info de paises
    this.paises.getPaises().subscribe( paises=>{
      this.paisess = paises;
      this.paisess.unshift({
        nombre: "[ Seleccione un pais ]",
        codigo: ""
      });
      console.log(paises);
    })
  }
  guardar(forma: NgForm){
    //si el form es invalido barremos todos los controls(campos) y los marcamos como tocados para
    // disparar las alertas
    if( forma.invalid )
    {
      Object.values( forma.controls ).forEach(control =>{
        control.markAsTouched();
      })
    }
    console.log("form guardado");
    console.log(forma.value);
  }

}
