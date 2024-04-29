import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Imaterias} from '../../models'
@Component({
  selector: 'app-materias-dialog',
  templateUrl:   './materias-dialog.component.html',
  styleUrl: './materias-dialog.component.scss'
})
export class MateriasDialogComponent {
  materiasForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private matDialogRef:MatDialogRef<MateriasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editarMaterias? :Imaterias){
      this.materiasForm = this.formBuilder.group({
        materia:['',[Validators.required]],
        diasyhorarios:['',[Validators.required,]],
        profesor:['',[Validators.required]]

      })
      if(editarMaterias){
        this.materiasForm.patchValue(editarMaterias)
      }
    }
  get carreraControl(){
    return this.materiasForm.get('materia');
  }
  get cantidaddemateriasControl(){
    return this.materiasForm.get('diasyhorarios');
  }
  get materiasControl(){
    return this.materiasForm.get('profesor');
  }

  agregar():void{
    if(this.materiasForm.invalid){
      this.materiasForm.markAllAsTouched();
      }else{
        Swal.fire({
          icon:'success',
          title:'Realizado',
          text:'MATERIA AGREGADO CORRECTAMENTE',})
          this.matDialogRef.close(this.materiasForm.value)

      }      }

}
