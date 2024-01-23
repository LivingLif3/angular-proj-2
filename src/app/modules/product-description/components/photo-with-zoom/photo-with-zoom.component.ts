import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-photo-with-zoom',
  templateUrl: './photo-with-zoom.component.html',
  styleUrls: ['./photo-with-zoom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoWithZoomComponent implements OnChanges {
  @Input() imgUrl!: string;
  @Input() zoomPower!: number;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imgUrl']) {
      console.log('here');
      this.ref.markForCheck();
    }
  }
}
