import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule, NzCheckboxModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCheckboxComponent),
      multi: true,
    },
  ],
})
export class CustomCheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() label!: string;
  @Input() items: any[] = [];
  @Input() value!: any;
  values: any = {};

  ngOnInit() {
    this.values = this.items.reduce((resObj, current) => {
      resObj[current.value] = false;
      return resObj;
    }, {});
  }

  onChange(value: string) {}

  writeValue(value: string) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(): void {}

  set _value(value: string) {
    this.value = value;
    this.onChange(value);
  }

  chooseItem(item: string) {
    this.values[item] = !this.values[item];
    this._value = this.values;
  }
}
