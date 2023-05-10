import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Socio } from './socio.model';
import { Barcos } from './barcos.model';
import { Patron } from './patron.model';
import { Salidas } from './salidas.model';
import { BarcoComponent } from './barco/barco.component';

@Injectable({
  providedIn: 'root'
})
export class ServicioSociosService {
  private barco:BarcoComponent;

  constructor(private dataService: DataServices) {}


  agregarSocioServicio(socio:Socio){
    this.dataService.guardarSocios(socio).subscribe((response) =>{console.log(response);});
  }

  agregarPatronServicio(patron:Patron){
    this.dataService.guardarPatron(patron).subscribe((response) =>{console.log(response);});
  }

  getBarcosServicio(barcos:Barcos[]){
    this.dataService.getBarcos().subscribe((response) =>{console.log(response); barcos.push(...response);});
  }

  getBarco(nMatricula:number){
    let barcos:Barcos = this.barco.barcos[nMatricula];
    
    return barcos;
  }

  getSalidasServicio(salidas:Salidas[]){
    this.dataService.getSalidas().subscribe((response) =>{console.log(response); salidas.push(...response);});
  }

  actualizarBarco(barcos:Barcos, nMatricula:number){
    this.dataService.actualizarBarco(barcos,nMatricula).subscribe((response) =>{console.log(response);});
  }

  deleteBarcosServicio(nMatricula:number){
    this.dataService.deleteBarcos(nMatricula).subscribe((response) =>{console.log(response);});
  }
}
