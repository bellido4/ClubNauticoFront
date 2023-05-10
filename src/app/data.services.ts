import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Socio } from "./socio.model";
import { Barcos } from "./barcos.model";
import { Patron } from "./patron.model";
import { Salidas } from "./salidas.model";

@Injectable({providedIn: 'root'})
export class DataServices{

    constructor(private httpClient:HttpClient){}

    guardarSocios(socio:Socio) : Observable<any>{
        return this.httpClient.post('http://localhost:8104/saveSocio', socio);
    }

    guardarPatron(patron:Patron) : Observable<any>{
        return this.httpClient.post('http://localhost:8104/savePatron', patron);
    }

    getBarcos() : Observable<Barcos[]>{
        return this.httpClient.get<Barcos[]>('http://localhost:8104/Barcos');
    }

    getSalidas() : Observable<Salidas[]>{
        return this.httpClient.get<Salidas[]>('http://localhost:8104/Salidas');
    }

    actualizarBarco(barco:Barcos, nMatricular:number): Observable<Barcos>{
        return this.httpClient.put<Barcos>('http://localhost:8104/updateBarco/${nMatricula}', barco);
    }

    deleteBarcos(nMatricula:number) : Observable<any>{
        const url = `http://localhost:8104/deleteBarco/${nMatricula}`;
        return this.httpClient.delete(url);
    }

}