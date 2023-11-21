import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-content-filter-bar',
  templateUrl: './content-filter-bar.component.html',
  styleUrls: ['./content-filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentFilterBarComponent {}
