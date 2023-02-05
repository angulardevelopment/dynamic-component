import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private elref: ElementRef) {
    this.elref.nativeElement.style.color = 'red';
   }

  ngAfterViewInit(){

  }
  changeColor(color){
    this.elref.nativeElement.style.color = color;

  }


}
