import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() cost: string = '';
}
