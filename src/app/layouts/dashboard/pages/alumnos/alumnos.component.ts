import { Component, OnInit } from '@angular/core';
import { Ialumnos } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './alumnos-dialog/alumnos-dialog.component';
import { ServicioAlumnos } from './pages/alumnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['NombreyApellido', 'dni', 'email', 'carrera', 'materia', 'nota', 'estado', 'opciones'];

  /*
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
    ];
  },*/
  loading = false;
  alumnos: Ialumnos[] = [];
  constructor(private matDialog: MatDialog,
    private servicioAlumnos: ServicioAlumnos) {

  }
  ngOnInit(): void {
    this.loading = true
    this.servicioAlumnos.getAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos
      },
      error: (err) => {

      },
      complete: () => {
        this.loading = false;
      }

    })
      ;
  }
  openDialog(editarAlumno?: Ialumnos): void {
    this.matDialog
      .open(AlumnosDialogComponent, {
        data: editarAlumno,
      })
      .afterClosed()
      .subscribe(
        {
          next: (result) => {
            if (result) {
              if (editarAlumno) {
                this.alumnos = this.alumnos.map((a) => a.dni === editarAlumno.dni ? { ...a, ...result } : a)
              } else {
                this.alumnos = [...this.alumnos, result];
              }
            }
          }
        }
      )
  }

  eliminar(dni: number): void {
    if (confirm('¿Esta seguro de querer eliminar al alumno?'))
      this.alumnos = this.alumnos.filter((a) => a.dni != dni)

  }
}
