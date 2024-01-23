import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeartOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ChooseSizeComponent } from './choose-size.component';

describe('ChooseSizeComponent', () => {
  let component: ChooseSizeComponent;
  let fixture: ComponentFixture<ChooseSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseSizeComponent],
      imports: [NzIconModule.forChild([HeartOutline])],
    });
    fixture = TestBed.createComponent(ChooseSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
