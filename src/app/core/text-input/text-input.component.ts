import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() classes: string = '';
  @Input() placeholder: string = '';
  @Input() rightIcon: string = '';
  @Input() leftIcon: string = '';
  @Input() type: string = 'text';
  @Input() model: string = '';
  @Input() isDisabled: boolean = false;

  @Output() modelChange : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onModelChange(value) {
    this.modelChange.emit(this.model);
  }

}
