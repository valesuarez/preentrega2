import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTamano]'
})
export class TamanoDirective {

  constructor(private elementRef: ElementRef) { 
    console.log('tamaño activado');
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.fontSize = "20px" ;

}
}