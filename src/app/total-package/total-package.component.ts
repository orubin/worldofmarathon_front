import { Component, OnInit,  ElementRef, OnDestroy  } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TotalPackageService} from "../services/total-package.service"
import { ApiService} from "../services/api.service";

@Component({
  selector: 'app-total-package',
  templateUrl: './total-package.component.html',
  styleUrls: ['./total-package.component.scss']
})
export class TotalPackageComponent implements OnInit {

  eventDate: string = 'July 16, 2018 12:00:00';

  future: Date;
  diff: number;
  $counter: Observable<number>;
  subscription: Subscription;
  timer: any = '';


  constructor(public totalPackageService: TotalPackageService, public apiService: ApiService) { }

  ngOnInit() {
    this.eventDate =  this.totalPackageService.selectedEvent.date;
    this.future = new Date(this.eventDate);
    this.$counter = Observable.interval(1000).map((x) => {
      this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
      return x;
    });

    this.subscription = this.$counter.subscribe((x) => this.timer = this.dhms(this.diff));
  }

  dhms(t) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return {
      d: days,
      h: hours,
      m: minutes,
      s: seconds
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
