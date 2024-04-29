import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Icarreras } from '../models/index';
import { CarrerasDialogComponent } from './carreras-dialog/carreras-dialog.component';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.scss'
})
export class CarrerasComponent {
  displayedColumns: string[] = ['carrera', 'cantidaddematerias', 'titulo', 'opciones'];

  carreras=[{
    carrera:'Front End',
    cantidaddematerias: 5,
    titulo:'Desarrollador Front End'
},
{
  carrera:'Backe End',
  cantidaddematerias: 5,
  titulo:'Desarrollador Back End ' 
},
];
constructor(private MatDialog: MatDialog){}

openDialog(editarCarreras?:Icarreras):void{
  this.MatDialog
  .open(CarrerasDialogComponent,{
    data:editarCarreras
  })
  .afterClosed()
  .subscribe(
    {
      next:(result)=>{
        if(result){
          if(editarCarreras){
            this.carreras=this.carreras.map ((a)=>a.carrera === editarCarreras.carrera?{...a,...result}:a)
          }else{
          this.carreras = [...this.carreras, result]
        }
      }}
    }
  )
}
eliminar (Carrera:string):void
{
  if(confirm('¿Esta seguro de eliminar esta Carrera?'))
    this.carreras =this.carreras.filter((c)=>c.carrera!=Carrera)
}}

