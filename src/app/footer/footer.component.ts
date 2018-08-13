import { Component, OnInit } from '@angular/core';
import { TotalPackageService} from "../services/total-package.service"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public totalPackageService: TotalPackageService) { }

  ngOnInit() {
  }

  contactUs() {
    this.totalPackageService.generalModalEmitter.emit('contact');
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
