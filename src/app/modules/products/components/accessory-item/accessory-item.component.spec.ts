import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccessoryItemComponent } from './accessory-item.component';

describe('AccessoryItemComponent', () => {
  let component: AccessoryItemComponent;
  let fixture: ComponentFixture<AccessoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoryItemComponent],
      imports: [BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(AccessoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
