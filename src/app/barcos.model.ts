

export class Barcos{

    nMatricula:number = 0;
    nombre:string = "";
    nAmarre:number = 0;
    cuota:number = 0;

    constructor(nMatricula:number, nombre:string, nAmarre:number, cuota:number ){
        this.nMatricula = nMatricula;
        this.nombre = nombre;
        this.nAmarre = nAmarre;
        this.cuota = cuota;
    }
}