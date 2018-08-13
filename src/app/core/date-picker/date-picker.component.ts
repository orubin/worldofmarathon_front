import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DatePickerComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  public value: any = '';

  constructor() { }

  ngOnInit() {
  }

  dateChanged(selectedValue) {
    this.value = selectedValue;
    this.placeholder = '';
  }

}
