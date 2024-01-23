import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';import { ICard } from '../../core/types/ICard';import { ISection } from '../../core/types/ISection';import { CARDS } from './home.module';@Component({  selector: 'app-home',  templateUrl: './home.component.html',  styleUrls: ['./home.component.scss'],  changeDetection: ChangeDetectionStrategy.OnPush,})export class HomeComponent {  sections: ISection[][] = [    [      {        title: 'HAT',        className: 'hat',      },      {        title: 'SHOES',        className: 'shoes',      },    ],    [      {        title: 'DRESSES',        className: 'flowers',      },    ],    [      {        title: 'BAGS',        className: 'bags',      },      {        title: 'CLOTHES',        className: 'clothes',      },    ],  ];  featuredCards: ICard[] = [    {      title: 'Mens Essential Tee',      cost: '32.00',      imageUrl: '../../../assets/woman_in_red.png',    },    {      title: 'Mens Essential Tee',      cost: '32.00',      imageUrl: '../../../assets/white_woman.png',    },    {      title: 'Mens Essential Tee',      cost: '32.00',      imageUrl: '../../../assets/woman_with_orange_hair.png',    },    {      title: 'Mens Essential Tee',      cost: '32.00',      imageUrl: '../../../assets/woman_in_red.png',    },  ];  constructor(@Inject(CARDS) public cards: ICard[]) {}}