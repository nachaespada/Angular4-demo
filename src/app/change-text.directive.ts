import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
export class ChangeTextDirective {

  constructor(el: ElementRef) {
  	console.log(Element);
    el.nativeElement.innerText="Text is changed by a Directive. ";
  }

}
