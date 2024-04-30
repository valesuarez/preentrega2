import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children:[
     
            
      {
        path:'carreras',
        loadChildren:() =>import('./pages/carreras/carreras.module').then((m)=>m.CarrerasModule)
      },
      {
        path:'materias',
        loadChildren:()=>import('./pages/materias/materias.module').then((m)=>m.MateriasModule)

      },
      {
        path:'alumnos',
        loadChildren:()=>import('./pages/alumnos/alumnos.module').then((m)=>m.AlumnosModule)
      },
    
    ]
  } ,





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
