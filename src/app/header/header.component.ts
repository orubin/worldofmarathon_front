import { Component, OnInit } from '@angular/core';
import { Subscription} from "rxjs/Subscription";
import { DeviceDetectionService} from "../services/device-detection.service";
import { ApiService } from "../services/api.service";
import { TotalPackageService } from "../services/total-package.service"

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginSubscription: Subscription;
  isLogged: boolean = false;
  userName:string = '';

  constructor(public deviceDetectionService: DeviceDetectionService, public apiService: ApiService, public totalPackageService: TotalPackageService) {
  }

  ngOnInit() {
    this.isLogged = this.apiService.isLogged;
    this.userName = this.apiService.userName;
    this.loginSubscription = this.apiService.userLoggedEmitter.subscribe((response)=> {
        this.userName = response;
        this.isLogged = true;
    });
  }

  updateGeneralModal(value) {
    let modalContent = {title: '', text: ''};
    if(value === 'about') {
      modalContent.title = 'About us';
      modalContent.text = 'Marathon travelers have very unique requirements. As Marathon runners, we know how hard and stressful it is to take care of all the logistics around a marathon in parallel to training for a marathon in order to arrive with a clear mind to the Marathon start-line. \n' +
        'Our mission is to help runners reach the start-line with peace of mind, by creating a sport travel platform addressing unique planning needs for athletes worldwide.';
      this.totalPackageService.generalModalEmitter.emit(modalContent);
    }
  }

}
