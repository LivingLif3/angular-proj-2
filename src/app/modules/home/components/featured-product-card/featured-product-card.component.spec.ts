import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ChooseColorComponent } from '../../../../shared/choose-color/choose-color.component';
import { ChooseSizeComponent } from '../../../../shared/choose-size/choose-size.component';
import { FavoriteComponent } from '../../../../shared/favorite/favorite.component';
import { SharedModule } from '../../../../shared/shared.module';

import { FeaturedProductCardComponent } from './featured-product-card.component';

describe('FeaturedProductCardComponent', () => {
  let component: FeaturedProductCardComponent;
  let fixture: ComponentFixture<FeaturedProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeaturedProductCardComponent,
        ChooseColorComponent,
        ChooseSizeComponent,
        FavoriteComponent,
      ],
      imports: [SharedModule, NzIconModule.forRoot([HeartOutline])],
    });
    fixture = TestBed.createComponent(FeaturedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
