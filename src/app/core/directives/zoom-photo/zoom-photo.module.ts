import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZoomPhotoDirective } from './zoom-photo.directive';

@NgModule({
  declarations: [ZoomPhotoDirective],
  exports: [ZoomPhotoDirective],
  imports: [CommonModule],
})
export class ZoomPhotoModule {}
