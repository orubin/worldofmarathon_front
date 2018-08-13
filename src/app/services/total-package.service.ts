import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response, URLSearchParams } from '@angular/http';

@Injectable()
export class TotalPackageService {

  attractionAddedEmitter = new EventEmitter<any>();
  eventSelectedEmitter = new EventEmitter<any>();
  generalModalEmitter = new EventEmitter<any>();

  selectedEvent; any = '';


  totalPackageCheckout = {
    totalPrice: 0,
    event: {
      event: '',
      tickets: null,
      total: 0
    },
    attraction: {
      attraction: '',
      tickets: null,
      total: 0
    },
    accommodation: {
      name: '',
      dates: '',
      total: 0,
    }
  };
  constructor(public http: Http) {

  }

}
