import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CardConstant } from '../../core/constants/card.constant';
import { ChooseColorComponent } from '../../shared/choose-color/choose-color.component';
import { ChooseSizeComponent } from '../../shared/choose-size/choose-size.component';
import { FavoriteComponent } from '../../shared/favorite/favorite.component';
import { LatestProductCardComponent } from '../../shared/latest-product-card/latest-product-card.component';

import { ButtonComponent } from './components/button/button.component';
import { FeaturedProductCardComponent } from './components/featured-product-card/featured-product-card.component';
import { HomeComponent } from './home.component';
import { CARDS } from './home.module';

// const CardConstant = [
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
//   {
//     title: "Men's Essential Tee",
//     cost: '32.00',
//     imageUrl: '../../../assets/woman_in_red.png',
//   },
// ];

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
        ChooseColorComponent,
      ],
      imports: [NzIconModule.forRoot([HeartOutline])],
      providers: [
        {
          provide: CARDS,
          useValue: CardConstant,
        },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject the value', () => {
    const value = TestBed.inject(CARDS);
    expect(value).toBeTruthy();
  });
});
