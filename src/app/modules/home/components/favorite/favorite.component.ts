import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteComponent {}
