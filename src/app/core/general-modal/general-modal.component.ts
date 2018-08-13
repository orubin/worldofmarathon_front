import {Component, Input, OnInit} from '@angular/core';
import { ApiService} from "../../services/api.service"

@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss']
})
export class GeneralModalComponent implements OnInit {

  @Input() text:  string = '';
  @Input() title: string = '';

  contactName: string = '';
  contactEmail: string = '';
  contactMessage: string = '';

  constructor(public apiService: ApiService) { }

  ngOnInit() {}

  sendMessage() {
    let data = {name: this.contactName, email: this.contactEmail, message: this.contactMessage};
    this.apiService.sendMessage(data);
  }
}
