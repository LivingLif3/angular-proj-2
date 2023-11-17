import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSizeComponent } from './choose-size.component';

describe('ChooseSizeComponent', () => {
  let component: ChooseSizeComponent;
  let fixture: ComponentFixture<ChooseSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseSizeComponent],
    });
    fixture = TestBed.createComponent(ChooseSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
