import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardConstant } from './core/constants/card.constant';
import { LanguageService } from './core/services/LanguageService/language.service';
import { CARDS } from './modules/home/home.module';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NzBadgeModule, NzModalModule, TranslateModule.forRoot()],
      declarations: [AppComponent, HeaderComponent, FooterComponent],
      providers: [
        LanguageService,
        TranslateService,
        {
          provide: CARDS,
          useValue: CardConstant,
        },
      ],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
