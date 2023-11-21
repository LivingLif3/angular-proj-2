import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSizeComponent } from '../choose-size/choose-size.component';
import { FavoriteComponent } from '../favorite/favorite.component';

import { LatestProductCardComponent } from './latest-product-card.component';

describe('LatestProductCardComponent', () => {
  let component: LatestProductCardComponent;
  let fixture: ComponentFixture<LatestProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestProductCardComponent, FavoriteComponent, ChooseSizeComponent],
    });
    fixture = TestBed.createComponent(LatestProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
