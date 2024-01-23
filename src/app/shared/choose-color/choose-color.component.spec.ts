import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ChooseColorComponent } from './choose-color.component';

describe('ChooseColorComponent', () => {
  let component: ChooseColorComponent;
  let fixture: ComponentFixture<ChooseColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseColorComponent],
      imports: [NzIconModule.forChild([HeartOutline])],
    });
    fixture = TestBed.createComponent(ChooseColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
