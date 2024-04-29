import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarrerasComponent } from './carreras.component';
import { SharedModule } from '../../../shared/shared.module';
import { CarrerasDialogComponent } from './carreras-dialog/carreras-dialog.component';


@NgModule({
  declarations: [
    CarrerasComponent,
    CarrerasDialogComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule,
    SharedModule
  ]
})
export class CarrerasModule { }
