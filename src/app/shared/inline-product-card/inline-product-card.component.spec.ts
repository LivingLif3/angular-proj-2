import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { SharedModule } from '../shared.module';

import { InlineProductCardComponent } from './inline-product-card.component';

describe('InlineProductCardComponent', () => {
  let component: InlineProductCardComponent;
  let fixture: ComponentFixture<InlineProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineProductCardComponent],
      imports: [SharedModule, HttpClientModule, NzIconModule.forRoot([HeartOutline])],
    });
    fixture = TestBed.createComponent(InlineProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
