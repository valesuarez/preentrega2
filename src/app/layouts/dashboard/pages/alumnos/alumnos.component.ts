import { Component } from '@angular/core';
import { Ialumnos } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './alumnos-dialog/alumnos-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  displayedColumns: string[] = ['NombreyApellido', 'dni', 'email', 'carrera', 'materia', 'nota', 'estado', 'opciones'];

  alumnos = [
    {
      nombre: 'Valeria',
      apellido: 'Suarez',
      dni: 12354678,
      email: 'v@gmail.com',
      carrera: 'FrontEnd',
      materia: 'Desarrollo web',
      nota: 8,
      estado: 'Aprobado',
    },
    {
      nombre: 'Yamil',
      apellido: 'Rousseau',
      dni: 12354679,
      email: 'y@gmail.com',
      carrera: 'Backend',
      materia: 'JavaScript',
      nota: 10,
      estado: 'Aprobado',
    },
  ];
  constructor(private matDialog: MatDialog) {

  }
  openDialog(editarAlumno?: Ialumnos): void {
    this.matDialog
    .open(AlumnosDialogComponent,{
      data:editarAlumno
    })
    .afterClosed()
    .subscribe(
      {
        next: (result) => {
          if (result) {
            this.alumnos = [...this.alumnos, result];
          }
        },
      }
    )
  }

  eliminar(dni: number): void {
    if (confirm('¿Esta seguro de querer eliminar al alumno?'))
      this.alumnos = this.alumnos.filter((a) => a.dni != dni)

  }
}
