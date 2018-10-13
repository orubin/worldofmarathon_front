import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service"

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {

  targetScore: any = 	[ 100, 200 ];
  users: Array<any> = [];

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.users = this.apiService.community;
  }

  searchHotels(){
    
  }

}
