import { Component, OnInit } from '@angular/core';
import { TotalPackageService } from '../services/total-package.service';
import { ProgressBarService} from "../services/progress-bar.service";
import { DeviceDetectionService} from "../services/device-detection.service";
import { ApiService} from "../services/api.service"
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  public activeSection:string = '';
  public attractionTicketsAmount: string = '';
  public attractionsInPackage: Array<any> = [];
  public skipped: Array<Boolean>  = [false, false, false, false, false];

  public mobileCubeContent = [
    {header: 'THE RACE', value: 'event'},{header: 'THE PLACE', value: 'place'},{header: 'TRANSFERS', value: 'trans'},
    {header: 'ACCOM', value: 'accom'},{header: 'SERVICES', value: 'services'},{header: 'COMMUNITY', value: 'community'}
  ];

  public mobileCenter = 1;
  public attractionAddedSubscription: Subscription;
  public navigateHomeSubscription: Subscription;

  constructor(public totalPackageService: TotalPackageService,
              public progressBarService: ProgressBarService,
              public deviceDetectionService: DeviceDetectionService,
              public apiService: ApiService) { }

  ngOnInit() {
    this.activeSection = 'event';
    this.attractionAddedSubscription = this.totalPackageService.attractionAddedEmitter.subscribe((data)=> {
      let attractionData = {
        name: data.attraction.name,
        attractionTicketsAmount:  data.tickets,
        totalPerAttraction: data.total
      };
      this.attractionsInPackage.push(attractionData);
    });

    this.navigateHomeSubscription = this.apiService.navigateHomeEmitter.subscribe((value)=> {
      this.updateProgressBar('event', 0);
    });
  }

  updateProgressBar(value, index = null) {
    if(value === 'community') {
      if(!this.apiService.isLogged) {
        document.getElementById('loginModalTrigger').click();
        return;
      }
    }

    this.activeSection = value;
    if (index != null) {
      for (let i = 0 ; i < index ; i ++) {
        this.skipped[i] = true;
      }

      for (let i = this.skipped.length -1  ; i >= index ; i --) {
        this.skipped[i] = false;
      }
    }
    window.scrollTo(0, 0);
    this.progressBarService.contentUpdatedEmitter.emit(value);
  }

  updateProgressBarMobile(direction) {
    if( (this.mobileCenter === 1 && direction === 'back')  || (this.mobileCenter === 4 && direction === 'froward')) {
      return;
    }

    if( direction === 'back') {
      this.mobileCenter--;
    } else {
      this.mobileCenter ++;
    }
    // this.progressBarService.contentUpdatedEmitter.emit(value);

  }
}
