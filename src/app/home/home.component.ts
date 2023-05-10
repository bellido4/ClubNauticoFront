import { Component } from '@angular/core';
import { Socio } from '../socio.model';
import { ServicioSociosService } from '../servicio-socios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Lista de empleados';
  socios:Socio[] = [ ];
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
  cuadroDni:string = "";

  agregarSocio(){
    let newSocio = new Socio(this.cuadroNombre, this.cuadroApellido, this.cuadroDni);
    
    this.socioService.agregarSocioServicio(newSocio);

    this.showToast = true;
    this.toastMessage = 'El socio se ha insertado correctamente';
    setTimeout(() => {
      this.showToast = false;
    }, 5000); // Ocultar el Toast después de 5 segundos
  }
}
