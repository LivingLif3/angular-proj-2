import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFilterBarComponent } from './content-filter-bar.component';

describe('ContentFilterBarComponent', () => {
  let component: ContentFilterBarComponent;
  let fixture: ComponentFixture<ContentFilterBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFilterBarComponent],
    });
    fixture = TestBed.createComponent(ContentFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
