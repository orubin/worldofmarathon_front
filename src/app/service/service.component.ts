import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() service: any;
  public ticketsAmount: Array<number> = [];
  public rankingAmount: Array<number> = [];
  public emptyRankingAmount: Array<number> = [];
  public ticketsSelected: number;
  public buttonText: string = '';

  constructor() { }

  ngOnInit() {
    // this.buttonText = this.service.price ? 'ADD TO PACKAGE' : 'READ MORE';
    this.buttonText = 'READ MORE';
    if ( this.service.amountAvailable ) {
      for (let i = 1; i < 10 && i < this.service.amountAvailable + 1; i ++) {
        this.ticketsAmount.push(i);
      }
    }

    for (let i = 0; i < this.service.rank; i ++) {
      this.rankingAmount.push(i);
    }

    for (let i = 0; i < (5 - this.service.rank); i ++) {
      this.emptyRankingAmount.push(i);
    }
  }

  onTicketsAmountChange(value) {
    this.ticketsSelected = value;
  }

  addAServiceToPackage(){
    
  }

}
