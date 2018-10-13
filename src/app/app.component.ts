import { Component, HostListener, OnInit } from '@angular/core';
import { TotalPackageService } from "./services/total-package.service";
import { DeviceDetectionService } from "./services/device-detection.service";
import { ApiService } from "./services/api.service";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isEventLoaded: boolean = false;
  allEventsLoaded: boolean = false;
  scrollUp: boolean = false;
  searchBar: boolean = true;
  isMobile: boolean = true;
  oldYValue: number = 0;
  newYValue: number = 0;

  generalModalText: string = '';
  generalModalTitle: string = '';

  eventSelectedSubscription: Subscription;
  eventsSubscription: Subscription;
  liveEventsSubscription: Subscription;
  generalModalSubscription: Subscription;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.newYValue = window.pageYOffset;
    if(this.oldYValue <  this.newYValue) {
      this.scrollUp = false;
    } else {
      this.scrollUp = true;
    }
    this.oldYValue = this.newYValue;
  }

  constructor(public totalPackageService: TotalPackageService, 
    public deviceDetectionService: DeviceDetectionService, 
    public apiService: ApiService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit () {
    this.isMobile = this.deviceDetectionService.isMobile();

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      
      let marathon = params['marathon'];
      if(marathon === 'jerusalem'){
        this.searchBar = false;
        this.allEventsLoaded = true;
        this.apiService.getEventData(14);
        //this.totalPackageService.eventSelectedEmitter.emit(true);
      }
      
    });

    this.eventSelectedSubscription = this.totalPackageService.eventSelectedEmitter.subscribe((data)=> {
      if(data) {
        this.isEventLoaded = true;
      }
    });

    this.eventsSubscription = this.apiService.eventsSelectionEmitter.subscribe((data)=> {
      this.allEventsLoaded = true;
    });

    this.liveEventsSubscription = this.apiService.liveEventsSelected.subscribe((data)=> {
      this.searchBar = false;
    });

    this.generalModalSubscription = this.totalPackageService.generalModalEmitter.subscribe((data)=> {
      if(data == 'contact') {
        this.generalModalTitle = 'Contact us';
        this.generalModalText = '';
      }else {
        this.generalModalTitle = data.title;
        this.generalModalText = data.text;
      }
    });

    setTimeout(()=>{
      if(document.getElementById('loginModalTrigger')){
        document.getElementById('loginModalTrigger').click();
      }
    }, 30000);


  }
}
