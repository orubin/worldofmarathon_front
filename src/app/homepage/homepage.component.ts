import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  liveEvents() {
    this.apiService.liveEventsSelected.emit(true);true
  }

}
