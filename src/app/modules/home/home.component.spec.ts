import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConstant } from '../../core/constants/card.constant';

import { ButtonComponent } from './components/button/button.component';
import { ChooseSizeComponent } from './components/choose-size/choose-size.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FeaturedProductCardComponent } from './components/featured-product-card/featured-product-card.component';
import { LatestProductCardComponent } from './components/latest-product-card/latest-product-card.component';
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
      ],
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
