import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Icarreras } from '../../models';
@Component({
  selector: 'app-carreras-dialog',
  templateUrl: './carreras-dialog.component.html',
  styleUrl: './carreras-dialog.component.scss'
})
export class CarrerasDialogComponent {
  carrerasForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private matDialogRef:MatDialogRef<CarrerasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editarCarreras? :Icarreras){
      this.carrerasForm = this.formBuilder.group({
        carrera:['',[Validators.required]],
        cantidaddematerias:['',[Validators.required,Validators.pattern(/^([0-9])*$/)]],
        titulo:['',[Validators.required]]

      })
      if(editarCarreras){
        this.carrerasForm.patchValue(editarCarreras)
      }
    }
  get carreraControl(){
    return this.carrerasForm.get('carrera');
  }
  get cantidaddemateriasControl(){
    return this.carrerasForm.get('cantidaddematerias');
  }
  get materiasControl(){
    return this.carrerasForm.get('titulo');
  }

  agregar():void{
    if(this.carrerasForm.invalid){
      this.carrerasForm.markAllAsTouched();
      }else{
        Swal.fire({
          icon:'success',
          title:'Realizado',
          text:'CARRERA AGREGADO CORRECTAMENTE',})
          this.matDialogRef.close(this.carrerasForm.value)

      }      }
  }
