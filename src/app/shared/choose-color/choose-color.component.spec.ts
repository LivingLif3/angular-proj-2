import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseColorComponent } from './choose-color.component';

describe('ChooseColorComponent', () => {
  let component: ChooseColorComponent;
  let fixture: ComponentFixture<ChooseColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseColorComponent],
    });
    fixture = TestBed.createComponent(ChooseColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
