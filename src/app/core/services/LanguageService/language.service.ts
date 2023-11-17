import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    if (language !== this.currentLanguage) {
      this.currentLanguage = language;
      this.translate.use(this.currentLanguage);
    }
  }
}
