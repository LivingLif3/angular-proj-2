import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

import { LanguageService } from '../../core/services/LanguageService/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scroll-animation', [
      state(
        'filled',
        style({
          backgroundColor: '#fff',
          color: '#000',
          position: 'fixed',
        }),
      ),
      state(
        'not-filled',
        style({
          backgroundColor: 'rgba(190, 191, 195, .0)',
          color: 'fff',
          position: 'fixed',
        }),
      ),
      transition('non-filled <=> filled', animate('100ms ease-in-out')),
    ]),
    trigger('scroll-animation-color', [
      state(
        'text-filled',
        style({
          color: '#000',
        }),
      ),
      state(
        'text-not-filled',
        style({
          color: '#fff',
        }),
      ),
      transition('text-not-filled <=> text-filled', animate('100ms ease-in-out')),
    ]),
  ],
}) //
export class HeaderComponent {
  @HostBinding('@scroll-animation') state: string = 'not-filled';

  stateLink: string = 'text-not-filled';

  modalVisible: boolean = false;

  selectedValue: string = '';

  @HostListener('window:scroll')
  onScrolling() {
    const height: number = this.el.nativeElement.offsetHeight;
    const scrollTop: number = window.pageYOffset;
    if (scrollTop > height) {
      this.state = 'filled';
      this.stateLink = 'text-filled';
    } else {
      this.state = 'not-filled';
      this.stateLink = 'text-not-filled';
    }
  }

  constructor(
    private el: ElementRef,
    private languageService: LanguageService,
  ) {}

  showModal(): void {
    this.modalVisible = true;
  }

  handleCancel(): void {
    this.modalVisible = false;
  }

  handleOk(): void {
    this.languageService.setCurrentLanguage(this.selectedValue);
    this.modalVisible = false;
  }
}
