import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardDirective } from '../../../../core/directives/CardDirective/card.directive';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProductCardComponent extends CardDirective {}
