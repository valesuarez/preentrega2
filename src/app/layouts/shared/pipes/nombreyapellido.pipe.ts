import { Pipe, PipeTransform } from '@angular/core';
import { Ialumnos } from '../../dashboard/pages/models';

@Pipe({
  name: 'nombreyapellido'
})
export class NombreyapellidoPipe implements PipeTransform {

  transform(value:Ialumnos, ...args:unknown[]): unknown {
    let result = `${value.nombre} ${value.apellido}`;
    console.log(value);
    return result;
  }


}
