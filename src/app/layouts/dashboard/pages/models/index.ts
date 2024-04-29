export type IRol ='admin'|'profesor'

export interface IUSer

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