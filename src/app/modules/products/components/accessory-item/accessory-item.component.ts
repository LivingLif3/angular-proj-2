import { state, style, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-accessory-item',
  templateUrl: './accessory-item.component.html',
  styleUrls: ['./accessory-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('unfolding', [
      state(
        'true',
        style({
          display: 'block',
        }),
      ),
      state(
        'false',
        style({
          display: 'none',
        }),
      ),
    ]),
  ],
})
export class AccessoryItemComponent {
  @Input() title!: string;
  @Input() subTitles!: string[];
  active: boolean = false;

  toggleActive() {
    this.active = !this.active;
  }
}
