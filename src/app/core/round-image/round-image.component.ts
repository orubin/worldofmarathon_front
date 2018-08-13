import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-round-image',
  templateUrl: './round-image.component.html',
  styleUrls: ['./round-image.component.scss']
})
export class RoundImageComponent implements OnInit {

  @Input() imageName: string = '';
  @Input() classes: string = '';

  constructor() { }

  ngOnInit() {

  }

}
