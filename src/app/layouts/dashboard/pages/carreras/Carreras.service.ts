import { Inject, Injectable } from "@angular/core";
import { Icarreras } from "../models";
import { Observable, delay, of } from "rxjs";
import { Carrera } from '../models/index';

const CARRERASS_DB: Icarreras[] = [
    {
        carrera: 'FrontEnd',
        cantidaddematerias: 3,
        titulo: 'Desarrollador Front End'
    },
    {
        carrera: 'BackEnd',
        cantidaddematerias: 3,
        titulo: 'Desarrollador Back End'
    },
];



@Injectable({ providedIn: 'root' })
export class ServicioCarreras {


    getCarreras(): Observable<Icarreras[]> {
        return of(CARRERASS_DB).pipe(delay(1500));
    }
    getCarrerasBycarrera(Carrera: string): Observable<Icarreras | undefined> {
        return of(CARRERASS_DB.find((el) => el.carrera === Carrera))
    }
}
