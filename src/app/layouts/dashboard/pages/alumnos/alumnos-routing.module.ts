import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { DetallesdeAlumnosComponent } from './pages/detallesde-alumnos/detallesde-alumnos.component';

const routes: Routes = [
  {
    path:'',
    component:AlumnosComponent
  },
  {
    path:':dni',
    component: DetallesdeAlumnosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
