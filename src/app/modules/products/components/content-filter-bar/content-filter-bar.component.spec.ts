import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeartOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSliderModule } from 'ng-zorro-antd/slider';

import { CustomCheckboxComponent } from '../../../../core/components/custom-checkbox/custom-checkbox.component';
import { CustomSelectComponent } from '../../../../core/components/custom-select/custom-select.component';
import { AccessoryItemComponent } from '../accessory-item/accessory-item.component';

import { ContentFilterBarComponent } from './content-filter-bar.component';

describe('ContentFilterBarComponent', () => {
  let component: ContentFilterBarComponent;
  let fixture: ComponentFixture<ContentFilterBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentFilterBarComponent, AccessoryItemComponent],
      imports: [
        NzInputModule,
        NzIconModule.forChild([PlusOutline, HeartOutline]),
        CustomSelectComponent,
        NzSliderModule,
        NzCheckboxModule,
        CustomCheckboxComponent,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(ContentFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
