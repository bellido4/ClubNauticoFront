import { Component, Input, OnInit } from '@angular/core';
import { ServicioSociosService } from '../servicio-socios.service';
import { Salidas } from '../salidas.model';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit{
  @Input() salidas:Salidas[] = [];

  constructor(private socioService:ServicioSociosService){
    //this.empleados = this.empleadoService.empleados;
  }

  ngOnInit(): void {
    this.getSalidas();
  }

  getSalidas(){
    this.socioService.getSalidasServicio(this.salidas);
  }
}
