import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path:'',
    component: MenuComponent,
    children:[{
      path:'carreras',
      loadChildren:()=>import('../carreras/carreras.module').then((m)=>m.CarrerasModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
