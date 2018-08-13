import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() classes: string = '';
  @Input() text: string = '';
  @Input() rightIcon: string = '';
  @Input() leftIcon: string = '';

  constructor() { }

  ngOnInit() {
  }

}
