import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardDirective } from '../../../../core/directives/CardDirective/card.directive';

@Component({
  selector: 'app-latest-product-card',
  templateUrl: './latest-product-card.component.html',
  styleUrls: ['./latest-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestProductCardComponent extends CardDirective {}
