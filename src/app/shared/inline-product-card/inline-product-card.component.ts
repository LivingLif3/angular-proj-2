import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-inline-product-card',
  templateUrl: './inline-product-card.component.html',
  styleUrls: ['./inline-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineProductCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() cost!: number | string;
}
