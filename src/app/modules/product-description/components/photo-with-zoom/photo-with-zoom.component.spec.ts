import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWithZoomComponent } from './photo-with-zoom.component';

describe('PhotoWithZoomComponent', () => {
  let component: PhotoWithZoomComponent;
  let fixture: ComponentFixture<PhotoWithZoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoWithZoomComponent],
    });
    fixture = TestBed.createComponent(PhotoWithZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
