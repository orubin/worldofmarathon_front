import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { TotalPackageService } from "../services/total-package.service"
import { DeviceDetectionService } from "../services/device-detection.service";
import { Marathon } from '../models/marathon';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit {

  rank: any = 0;
  countryFlag: string = '../../assets/images/flags/ND.png';
  statsIcons: Array<any> = [];
  event : any;
  isMobile: boolean = false;

  eventDataSubscription: Subscription;

  constructor(public apiService: ApiService, public totalPackageService: TotalPackageService, public deviceDetectionService: DeviceDetectionService) {}

  ngOnInit() {
    this.event = this.totalPackageService.selectedEvent;
    console.log(this.event);
    this.rank = Array(5).fill(4);
  }

  navigateHome() {
    this.apiService.navigateHomeEmitter.emit(true);
  }

}
