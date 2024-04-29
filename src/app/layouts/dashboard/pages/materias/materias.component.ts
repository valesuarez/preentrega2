import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Imaterias } from '../models/index';
import {MateriasDialogComponent} from './materias-dialog/materias-dialog.component'
@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.scss'
})
export class MateriasComponent {
  displayedColumns: string[] = ['materia', 'diasyhorarios', 'profesor', 'opciones'];

  materias=[{
    materia:'Desarrollo web',
    diasyhorarios:'lun y mier 10 a 12',
    profesor:'Elian Rousseau'
  },
  {
    materia:'SQL',
    diasyhorarios:'mar y jue 19 a 21',
    profesor:'Atenea Suarez'
  },];
  constructor(private MatDialog: MatDialog){}

openDialog(editarMaterias?:Imaterias):void{
  this.MatDialog
  .open(MateriasDialogComponent,{
    data:editarMaterias
  })
  .afterClosed()
  .subscribe(
    {
      next:(result)=>{
        if(result){
          this.materias = [...this.materias, result]
        }
      },
    }
  )
}
eliminar (materia:string):void
{
  if(confirm('¿Esta seguro de eliminar esta Carrera?'))
    this.materias =this.materias.filter((m)=>m.materia!=materia)
}
}
