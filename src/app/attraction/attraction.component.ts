import {Component, Input, OnInit} from '@angular/core';
import { TotalPackageService } from "../services/total-package.service"
@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  @Input() attraction;
  days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  ticketAmount = [1,2,3,4,5,6,7,8,9,10];
  dayName:string = '';
  attractionDate:any = '';
  attractionHour:any = '';

  attending: Array<any> = [];
  attendingNum:number;

  ticketsAmountSelected: number = 1;
  constructor(public totalPackageService: TotalPackageService) { }

  ngOnInit() {
    let d = new Date(this.attraction.date);
    this.dayName = this.days[d.getDay()];
    let splittedDate = this.attraction.date.split(' ');
    this.attractionDate = splittedDate[0] + ' ' + splittedDate[1] + ' '  + splittedDate[2];
    this.attractionHour = d.getHours() + ':00';

    for(let i = 0; i < 4 ; i++) {
      this.attending.push(this.attraction.attending[i]);
    }
    this.attendingNum = this.attraction.attending.length - 4;
  }

  onAmountSelect(value) {
    this.ticketsAmountSelected = value;
  }

  addAttractionToPackage(){
    this.totalPackageService.totalPackageCheckout.attraction.attraction = this.attraction;
    this.totalPackageService.totalPackageCheckout.event.tickets = this.ticketsAmountSelected;
    let totalAttractionPrice = this.ticketsAmountSelected * this.attraction.price;
    this.totalPackageService.totalPackageCheckout.totalPrice += totalAttractionPrice;
    this.totalPackageService.totalPackageCheckout.attraction.total += totalAttractionPrice;
    this.totalPackageService.attractionAddedEmitter.emit({attraction: this.attraction, tickets: this.ticketsAmountSelected, total: totalAttractionPrice})
  }

}
