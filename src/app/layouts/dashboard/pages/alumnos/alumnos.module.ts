import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from '../../../shared/shared.module';

import { AlumnosDialogComponent } from './alumnos-dialog/alumnos-dialog.component';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosDialogComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
  exports:[
   AlumnosComponent 
  ]
})
export class AlumnosModule { }
