import { Component } from '@angular/core';
import { Barcos } from '../barcos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioSociosService } from '../servicio-socios.service';
import { BarcoComponent } from '../barco/barco.component';

@Component({
  selector: 'app-actualizar-barco',
  templateUrl: './actualizar-barco.component.html',
  styleUrls: ['./actualizar-barco.component.css']
})
export class ActualizarBarcoComponent {

  cuadroNombre:string = "";
  cuadroAmarre:number = 0;
  cuadroCuota:number = 0;
  nMatricula:number;

  barcos:Barcos[] = [];

  private barcoObject:Barcos;

  constructor(private router:Router, private route:ActivatedRoute, private servicio:ServicioSociosService, private barco:BarcoComponent){}


  ngOnInit(): void {
    this.barcos = this.barco.barcos;
    this.nMatricula = this.route.snapshot.params['nMatricula'];

    let b:Barcos = this.servicio.getBarco(this.nMatricula);

    this.cuadroNombre = b.nombre;
    this.cuadroAmarre = b.nAmarre;
    this.cuadroCuota = b.cuota;
  } 

  actualizarBarco(){
    this.servicio.actualizarBarco(this.barcoObject,this.nMatricula);
  }


}
