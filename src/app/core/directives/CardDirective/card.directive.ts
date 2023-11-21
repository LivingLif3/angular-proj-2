import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCard]',
})
export abstract class CardDirective {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() cost: string = '';
}
