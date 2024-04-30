import { FormControl } from "@angular/forms";

export type IRol ='admin'|'profesor'

export interface IUsuario

    {
        email:string,
        rol:IRol,
      
    }

    
export type Materias = 'Desarrollo web' | 'JavaScript' | 'Angular' | 'React'|'Diseño UX/UI'|'Diseño UX/UI avanzado'|'Photoshop';

export type Estado = 'Aprobado' | 'Recupera' |'Recursa';
export type Carrera = 'FrontEnd'| 'BackEnd'|'Desarrollo UX/UI'

export interface Ialumnos{
    nombre:string;
    apellido:string;
    dni:number;
    email:string;
    carrera:Carrera;
    materia:Materias;
    nota:number;
    estado:Estado;
    
}

export interface Icarreras{
    carrera:string;
    cantidaddematerias:number;
    titulo:string
}

export interface Imaterias{
    materia:string;
    diasyhorarios:string;
    profesor:string
}

export type Rol = 'Admin'|'Profesor'
export interface Iusuario{
    email:string;
    caontraseña:number;
    rol:Rol
}
export interface Iinscripciones{
    alumno:Ialumnos;
    carreras:Icarreras
}
export interface IinscripcionesForm{
    alumno:FormControl<Ialumnos|null>;
    carreras:FormControl<Icarreras|null>
}
export interface IcreateInscripcionesDate{
    carrera?:Icarreras|null;
    alumno?:Ialumnos|null
}