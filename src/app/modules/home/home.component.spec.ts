import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './components/button/button.component';
import { ChooseSizeComponent } from './components/choose-size/choose-size.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FeaturedProductCardComponent } from './components/featured-product-card/featured-product-card.component';
import { LatestProductCardComponent } from './components/latest-product-card/latest-product-card.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FeaturedProductCardComponent,
        ButtonComponent,
        LatestProductCardComponent,
        FavoriteComponent,
        ChooseSizeComponent,
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
