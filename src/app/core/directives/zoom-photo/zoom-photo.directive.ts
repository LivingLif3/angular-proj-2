import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoomPhoto]',
})
export class ZoomPhotoDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mousemove', ['$event'])
  zoom(e: any): void {
    const zoomer = this.el.nativeElement;
    let offsetX, offsetY;

    if (e.offsetX) {
      offsetX = e.offsetX;
    } else if (e.touches && e.touches.length > 0) {
      offsetX = e.touches[0].pageX;
    }

    if (e.offsetY) {
      offsetY = e.offsetY;
    } else if (e.touches && e.touches.length > 0) {
      offsetY = e.touches[0].pageY;
    }

    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;

    this.renderer.setStyle(zoomer, 'backgroundPosition', `${x}% ${y}%`);
  }
}
