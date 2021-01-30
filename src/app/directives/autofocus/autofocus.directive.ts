import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {

  constructor(protected host: ElementRef) { }

  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }

}
