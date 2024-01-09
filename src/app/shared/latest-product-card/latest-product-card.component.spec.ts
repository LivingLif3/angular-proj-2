import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ChooseSizeComponent } from '../choose-size/choose-size.component';
import { FavoriteComponent } from '../favorite/favorite.component';

import { LatestProductCardComponent } from './latest-product-card.component';

describe('LatestProductCardComponent', () => {
  let component: LatestProductCardComponent;
  let fixture: ComponentFixture<LatestProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestProductCardComponent, FavoriteComponent, ChooseSizeComponent],
      imports: [NzIconModule.forRoot([HeartOutline])],
    });
    fixture = TestBed.createComponent(LatestProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
