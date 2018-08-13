import { Component, OnInit } from '@angular/core';
import { Marathon} from "../models/marathon"
import { ApiService} from "../services/api.service"
import { TotalPackageService } from "../services/total-package.service"
import { Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-event-selection',
  templateUrl: './event-selection.component.html',
  styleUrls: ['./event-selection.component.scss']
})
export class EventSelectionComponent implements OnInit {

  events: Array<any> = [];
  public marathons : Array<Marathon>;
  eventsSubscription: Subscription;

  constructor(public apiService: ApiService, public totalPackageService: TotalPackageService) { }

  ngOnInit() {
    this.apiService.getEvents();

    this.eventsSubscription = this.apiService.eventsSelectionEmitter.subscribe((data)=> {
      this.events = data;
    });
  }

  selectEvent(event) {
    this.totalPackageService.selectedEvent = event;
    this.apiService.getEventData(event.id);
    this.totalPackageService.eventSelectedEmitter.emit(true);
  }

}
