import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { NombreyapellidoPipe } from './pipes/nombreyapellido.pipe';
import { TamanoDirective } from '../dashboard/pages/directivas/tamaño.directive';
import { ValidacionesPipe } from './pipes/validaciones.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
   NombreyapellidoPipe,
   TamanoDirective,
   ValidacionesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule,
    MatTableModule,
    NombreyapellidoPipe,
    TamanoDirective,
    ValidacionesPipe,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
