import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'dashboard',
   // component: DashboardComponent,
    loadChildren:()=>import('./layouts/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./layouts/auth/auth.module').then((m)=>m.AuthModule)
},

  {
    path: '**', 
    redirectTo:'/dashboard'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
