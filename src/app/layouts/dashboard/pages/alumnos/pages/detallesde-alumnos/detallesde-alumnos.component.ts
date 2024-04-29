import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import { Ialumnos } from '../../../models';
import { ServicioAlumnos } from '../alumnos.service';

@Component({
  selector: 'app-detallesde-alumnos',
  templateUrl: './detallesde-alumnos.component.html',
  styleUrl: './detallesde-alumnos.component.scss'
})
export class DetallesdeAlumnosComponent {
  alumno$: Observable<Ialumnos|undefined>

 

constructor(
  private activatedRoute: ActivatedRoute,
  private Router: Router,
  private ServicioAlumnos: ServicioAlumnos
){
 
  this.alumno$ = this.ServicioAlumnos
  .getAlumnoByDni(parseInt(this.activatedRoute.snapshot.params['dni']))
  ;
}
cambiarParametro():void{
  this.Router.navigate(['dashboard','alumnos', Math.random().toFixed(12345678)])
}
}
