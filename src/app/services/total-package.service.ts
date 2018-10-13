import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Response, URLSearchParams } from '@angular/http';
import { HttpClient } from '@angular/common/http';

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
  
  constructor(public http: HttpClient) {

  }

}
