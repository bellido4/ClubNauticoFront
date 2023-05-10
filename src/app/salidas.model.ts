import { Time } from "@angular/common";
import { Patron } from "./patron.model";
import { Barcos } from "./barcos.model";
import { Socio } from "./socio.model";

export class Salidas{

    idSalida:number = 0;
    horaSalida:Time;
    fechaSalida:Date;
    destino:string = "";
    patron:Patron;
    barco:Barcos;
    socio:Socio;


    constructor(idSalida:number, horaSalida:Time, fechaSalida:Date, destino:string, patron:Patron, barco:Barcos,socio:Socio){
        this.idSalida = idSalida;
        this.horaSalida = horaSalida;
        this.fechaSalida = fechaSalida;
        this.destino = destino;
        this.patron = patron;
        this.barco = barco;
        this.socio = socio;
    }
}