import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSize',
  standalone: true,
})
export class TextSizePipe implements PipeTransform {
  transform(value: string, accessSize: number, show: boolean = false): unknown {
    if (value.length > accessSize) {
      if (show) {
        return value;
      } else {
        return value.substring(0, accessSize + 1);
      }
    } else {
      return value.substring(0, accessSize + 1);
    }
  }
}
