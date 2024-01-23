import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
export class HeaderComponent implements OnInit {
  @HostBinding('@scroll-animation') state: string = 'not-filled';

  stateLink: string = 'text-not-filled';

  modalVisible: boolean = false;

  selectedValue: string = '';

  route: string = '/home';

  @HostListener('window:scroll')
  onScrolling() {
    if (!this.route.includes('product/')) {
      const height: number = this.el.nativeElement.offsetHeight;
      const scrollTop: number = window.pageYOffset;
      if (scrollTop > height) {
        this.setFilled();
      } else {
        this.setNotFilled();
      }
    } else {
      this.setFilled();
    }
  }

  constructor(
    private el: ElementRef,
    private languageService: LanguageService,
    private router: Router,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route) => {
        this.route = this.router.url;
        if (this.route.includes('product/')) {
          this.setFilled();
          this.ref.markForCheck();
        } else {
          this.setNotFilled();
          this.ref.markForCheck();
        }
      });
  }

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

  setFilled() {
    this.state = 'filled';
    this.stateLink = 'text-filled';
  }

  setNotFilled() {
    this.state = 'not-filled';
    this.stateLink = 'text-not-filled';
  }
}
