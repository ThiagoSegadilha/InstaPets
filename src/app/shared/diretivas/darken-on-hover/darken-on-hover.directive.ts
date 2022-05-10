import {Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(
    private elemento: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.elemento.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.elemento.nativeElement, 'filter', 'brightness(100%)');
  }
}
