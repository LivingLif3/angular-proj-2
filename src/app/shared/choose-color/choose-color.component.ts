import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseColorComponent {
  circles: string[] = ['blue', 'green', 'orange', 'black'];
}
