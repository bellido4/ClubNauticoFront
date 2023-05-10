import { Component } from '@angular/core';
import { ServicioSociosService } from '../servicio-socios.service';
import { Patron } from '../patron.model';

@Component({
  selector: 'app-patro',
  templateUrl: './patro.component.html',
  styleUrls: ['./patro.component.css']
})
export class PatroComponent {
  title = 'Lista de empleados';
  showToast = false;
  toastMessage = '';

  constructor(private socioService:ServicioSociosService){
    //this.empleados = this.empleadoService.empleados;
  }

  ngOnInit(): void {
    //this.empleados = this.empleadoService.empleados;
  } 
  
  cuadroNombre:string = "";
  cuadroApellido:string = "";

  agregarPatron(){
    let newPatron = new Patron(this.cuadroNombre, this.cuadroApellido);
    
    this.socioService.agregarPatronServicio(newPatron);

    this.showToast = true;
    this.toastMessage = 'El socio se ha insertado correctamente';
    setTimeout(() => {
      this.showToast = false;
    }, 5000); // Ocultar el Toast después de 5 segundos
  }
}
