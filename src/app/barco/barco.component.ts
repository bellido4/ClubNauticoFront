import { Component, Input, OnInit } from '@angular/core';
import { Barcos } from '../barcos.model';
import { ServicioSociosService } from '../servicio-socios.service';
import { ActivatedRoute } from '@angular/router';
import { DataServices } from '../data.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent implements OnInit{
  @Input() barcos:Barcos[] = [];
  nMatricula:number;

  constructor(private socioService:ServicioSociosService,private route:ActivatedRoute, private dataService: DataServices, private toastr: ToastrService){
    //this.empleados = this.empleadoService.empleados;
  }

  ngOnInit(): void {
    this.getBarcos();
    this.nMatricula = this.route.snapshot.params['id'];
  }

  getBarcos(){
    this.socioService.getBarcosServicio(this.barcos);
  }

  deleteBarcos(nMatricula:number){
    this.socioService.deleteBarcosServicio(nMatricula);
  }

  showToast() {
    this.toastr.success('Barco eliminado correctamente, actualice la pagina para ser eliminado!', 'Barco Eliminado', {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-middle-center',
      tapToDismiss: true,
      toastClass: 'toast-custom-class'
    });
  }
}
