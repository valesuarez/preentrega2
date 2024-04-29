import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detallesde-alumnos',
  templateUrl: './detallesde-alumnos.component.html',
  styleUrl: './detallesde-alumnos.component.scss'
})
export class DetallesdeAlumnosComponent {
constructor(private activatedRoute: ActivatedRoute,
  private Router: Router
){
  this.activatedRoute.params.subscribe({
    next:(v)=> console.log(v)
  });
}
cambiarParametro():void{
  this.Router.navigate(['dashboard','alumnos', Math.random().toFixed(12345678)])
}
}
