import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})

export class ZoomDirective {
  constructor(public el: ElementRef) {}

  @Input('appZoom') hover: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add(this.hover);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove(this.hover);
  }
}
