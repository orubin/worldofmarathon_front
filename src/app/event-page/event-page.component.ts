import { Component, OnInit } from '@angular/core';
import { TotalPackageService } from "../services/total-package.service"
import { ApiService } from "../services/api.service"
import { DeviceDetectionService} from "../services/device-detection.service"
import { find } from 'lodash';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  selectedEvent: any;
  selectedTickets: number = 1;
  eventDate: string = '';
  description: string = '';
  events: Array<any>;
  tickets: Array<number>;
  mapView: string = 'route';
  mapData: any = {lat: '', lng: ''};
  practicals: any = [];
  runmapLink: string = '';

  constructor(public totalPackageService: TotalPackageService,
              public apiService: ApiService,
              public deviceDetectionService: DeviceDetectionService) { }

  ngOnInit() {
    this.apiService.eventDataEmitter.subscribe((response)=> {
      this.eventDate = response.date;
      this.description = response.description;
      this.mapData.lat = parseFloat(response.latitude);
      this.mapData.lng = parseFloat(response.longitude);
      this.practicals = response.practicles;
      this.events = this.totalPackageService.selectedEvent.run_types;
      this.selectedEvent = this.events[0];
      this.runmapLink = response.run_map + '?width=740&amp;height=660;extended=1&amp;distance_markers=1&amp;unit_type=metric&amp;elevation=true" width="760" height="588" border="0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"';

    });
    if(this.totalPackageService.selectedEvent) {
      this.events = this.totalPackageService.selectedEvent.run_types;
    }
    this.tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  onEventSelect(value) {
    let eventSelected = find(this.events, function(event) { return event.type === value; });
    this.selectedEvent = eventSelected;
  }
  onTicketsAmountChange(value) {
    this.selectedTickets = parseInt(value);
  }

  updateMapView(value) {
    this.mapView = value;
  }

  addToPackage() {
    this.totalPackageService.totalPackageCheckout.event.event = this.selectedEvent.type;
    this.totalPackageService.totalPackageCheckout.event.tickets = this.selectedTickets;
    this.totalPackageService.totalPackageCheckout.event.total += parseInt(this.selectedEvent.price);
    this.totalPackageService.totalPackageCheckout.totalPrice += this.selectedTickets * parseInt(this.selectedEvent.price);
  }

}
