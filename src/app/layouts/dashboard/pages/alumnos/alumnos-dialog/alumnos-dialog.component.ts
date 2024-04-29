import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Ialumnos } from '../../models';
import { soloGmailValidator } from '../../utils/validators';

@Component({
  selector: 'app-alumnos-dialog',
  templateUrl: './alumnos-dialog.component.html',
  styleUrl: './alumnos-dialog.component.scss'
})
export class AlumnosDialogComponent {
 
  alumnosForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnosDialogComponent>,
  @Inject(MAT_DIALOG_DATA) private editarAlumno?:Ialumnos){
    this.alumnosForm = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]],
      apellido:['',[Validators.required,Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$') ]],
      dni:['',[Validators.required, Validators.pattern(/^([0-9])*$/),Validators.maxLength(8),Validators.minLength(8)
    ]],
      email:['',[Validators.required,soloGmailValidator ,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
      carrera:['',[Validators.required]],
      materia:['',[Validators.required ]],
      nota:['',[Validators.required, Validators.pattern(/^([0-9])*$/),Validators.max(10),Validators.min(1)
    ]],
      estado:['',[Validators.required ]],
      
    })
    if(editarAlumno){
      this.alumnosForm.patchValue(editarAlumno)
    }

  }
  get nombreControl() {
    return this.alumnosForm.get('nombre');
  }
  get apellidoControl() {
    return this.alumnosForm.get('apellido');
  }
  get dniContro(){
    return this.alumnosForm.get('dni')
  }
   get emailControl(){
    return this.alumnosForm.get('email');
  }
  get carreraControl(){
    return this.alumnosForm.get('carrera');
  }
  get materiControl(){
    return this.alumnosForm.get('materia');
  }
  get notaControl(){
    return this.alumnosForm.get('nota');
  }
  get estadoControl(){
    return this.alumnosForm.get('estado')
  }

 agregar(): void{
    if(this.alumnosForm.invalid){
      this.alumnosForm.markAllAsTouched();
    }else{
      Swal.fire({
        icon:'success',
        title:'Realizado',
        text:'ALUMNO AGREGADO CORRECTAMENTE',})
      this.matDialogRef.close(this.alumnosForm.value)
    }
  }
}

   