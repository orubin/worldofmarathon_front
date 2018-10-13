import { Component, OnInit } from '@angular/core';
import { Marathon } from "../models/marathon";
import { ApiService } from "../services/api.service";
import { TotalPackageService } from "../services/total-package.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event-selection',
  templateUrl: './event-selection.component.html',
  styleUrls: ['./event-selection.component.scss']
})
export class EventSelectionComponent implements OnInit {

  events: Array<any> = [];
  public marathons : Array<Marathon>;
  eventsSubscription: Subscription;

  constructor(private router: Router, public apiService: ApiService, 
    public totalPackageService: TotalPackageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getEvents();

    this.eventsSubscription = this.apiService.eventsSelectionEmitter.subscribe((data)=> {
      this.events = data;
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        let marathon = params['marathon'];
        if(marathon === 'jerusalem'){
          this.selectEvent(this.events[6]);
        }
      });
    });
  }

  selectEvent(event) {
    this.totalPackageService.selectedEvent = event;
    this.apiService.getEventData(event.id);
    this.totalPackageService.eventSelectedEmitter.emit(true);
    this.router.navigate([`../marathons/${event.id}`], { relativeTo: this.activatedRoute });
    window.scrollTo(0, 0);
  }

}
