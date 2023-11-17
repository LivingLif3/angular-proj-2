import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-product-card',
  templateUrl: './latest-product-card.component.html',
  styleUrls: ['./latest-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestProductCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() cost: string = '';
}
