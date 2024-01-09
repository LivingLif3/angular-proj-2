import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppstoreOutline, PlusOutline } from '@ant-design/icons-angular/icons';
import { StoreModule } from '@ngrx/store';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';

import { environment } from '../../../environments/environment';
import { CustomCheckboxComponent } from '../../core/components/custom-checkbox/custom-checkbox.component';
import { CustomSelectComponent } from '../../core/components/custom-select/custom-select.component';
import { appReducers } from '../../store/reducers/app.reducers';

import { AccessoryItemComponent } from './components/accessory-item/accessory-item.component';
import { ContentFilterBarComponent } from './components/content-filter-bar/content-filter-bar.component';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, AccessoryItemComponent, ContentFilterBarComponent],
      imports: [
        NzIconModule.forRoot([AppstoreOutline, PlusOutline]),
        StoreModule.forRoot(appReducers),
        BrowserAnimationsModule,
        HttpClientModule,
        NzSelectModule,
        NzRadioModule,
        NzPaginationModule,
        NzInputModule,
        CustomSelectComponent,
        NzSliderModule,
        CustomCheckboxComponent,
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
      ],
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
