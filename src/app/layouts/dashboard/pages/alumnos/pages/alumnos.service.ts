import { Inject, Injectable } from "@angular/core";
import { Ialumnos } from "../../models";
import { Observable, delay, of } from "rxjs";

const ALUMNOS_DB: Ialumnos[]=[
    {
        nombre: 'Valeria',
        apellido: 'Suarez',
        dni: 12354678,
        email: 'v@gmail.com',
        carrera: 'FrontEnd',
        materia: 'Desarrollo web',
        nota: 8,
        estado: 'Aprobado',
      },
      {
        nombre: 'Yamil',
        apellido: 'Rousseau',
        dni: 12354679,
        email: 'y@gmail.com',
        carrera: 'BackEnd',
        materia: 'JavaScript',
        nota: 10,
        estado: 'Aprobado',
      },
];



@Injectable({providedIn:'root'})
export class ServicioAlumnos{


    getAlumnos():Observable<Ialumnos[]>{
        return of(ALUMNOS_DB).pipe(delay(1500));
    }
  getAlumnoByDni(dni:number):Observable<Ialumnos|undefined>{
  return of(ALUMNOS_DB.find((el)=>el.dni=== dni))
  }
}
