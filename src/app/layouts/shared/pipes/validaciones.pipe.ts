import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validaciones'
})
export class ValidacionesPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {
    
    if(value){
      let mensajes: string[] =[];
      for(const key in value){
        if(Object.prototype.hasOwnProperty.call(value, key)){
          const detalleError = value[key];
          if(key === 'required') mensajes.push('campo obligatorio');
          if(key === 'pattern') mensajes.push('revise los valores permitidos');
          if(key === 'maxlength') mensajes.push('te sobran numeros');
          if(key === 'minlength') mensajes.push('te faltan numeros');
          if(key === 'soloGmail') mensajes.push('recuerda solo GMAIL');
          if(key === 'max') mensajes.push('nota inexistente');
          if(key === 'min') mensajes.push('nota inexistente');

          
        }
      }
      return mensajes.join('. ');
    }



    return null;
  }

}
