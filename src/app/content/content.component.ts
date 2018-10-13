import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TotalPackageService } from "../services/total-package.service";
import { ApiService} from "../services/api.service"
import { ProgressBarService } from "../services/progress-bar.service";
import { WeatherService } from "../services/weather.service"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  currentContent: string = 'event';
  contentSubscription: Subscription;
  loginSubscription: Subscription;
  isLogged: boolean = false;

  constructor( public totalPackageService: TotalPackageService, public progressBarService: ProgressBarService, public apiService: ApiService) { }

  ngOnInit() {
    this.contentSubscription = this.progressBarService.contentUpdatedEmitter.subscribe((data)=> {
      this.currentContent = data;
      if(data === 'community') {
        document.getElementById('loginModalTrigger').click();
      }
    });

    this.loginSubscription = this.apiService.userLoggedEmitter.subscribe((response)=> {
      this.isLogged = true;
    });
  }

}
