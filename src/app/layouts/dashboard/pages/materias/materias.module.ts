import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasComponent } from './materias.component';
import { SharedModule } from '../../../shared/shared.module';

import { MateriasDialogComponent } from './materias-dialog/materias-dialog.component';

@NgModule({
  declarations: [
    MateriasComponent,
    MateriasDialogComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    SharedModule
  ],
  exports:[
    MateriasComponent
  ]
})
export class MateriasModule { }
