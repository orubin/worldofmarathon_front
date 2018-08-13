import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from "../services/api.service"
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  userName: string = '';
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  connectUser() {
    this.userName = this.apiService.userName;
    if(!this.userName) {
      this.userName = 'Not logged user ';
    }
    this.apiService.usersConnection(this.userName, this.user.name);
  }

}
