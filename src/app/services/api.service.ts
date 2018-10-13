import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from "../models/place";
import { Hotel } from "../models/hotel";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  API_URL : string = "https://secured.worldofmarathon.com/api/v1/";

  eventsSelectionEmitter = new EventEmitter();
  eventDataEmitter = new EventEmitter();
  liveEventsSelected = new EventEmitter();
  navigateHomeEmitter = new EventEmitter();
  registerUserEmitter = new EventEmitter();
  loginEmitter = new EventEmitter();
  userLoggedEmitter = new EventEmitter();

  placeData: Place;
  community: Array<any> = [];
  hotels : Array<Hotel>;
  services: Array<any>;

  isLogged = false;
  userName: string = '';

  constructor(public http : HttpClient) { }

  // read method
  public get(path) {
    let endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }

  // create method
  public post(path:string, body:any) {
    let endpoint = this.API_URL + path;
    return this.http.post(endpoint, body);
  }
  // delete method
  public delete(path:string){
    let endpoint = this.API_URL + path;
    return this.http.delete(endpoint);
  }

  getAny(eventId): Observable<any> {
    let body = { id: eventId };
    return this.http.post<any>(this.API_URL + "marathons/get_marathon", body); // request options as second parameter
  }

  getEvents() {
    this.get("marathons/get_marathons").subscribe((response) => {
      this.eventsSelectionEmitter.emit(response['data']);
    });
  }

  getEventData(eventId) {
    let body = { id: eventId };
    this.post("marathons/get_marathon", body).subscribe((response) => {
      this.eventDataEmitter.emit(response['data']);
      let data = response['data'];
      this.getCityData(data.place_id);
      this.getCityAccommodations(data.place_id);
      this.getExternalCityServices(data.place_id);
      this.getCommunityInfo(eventId);
    });
  }

  getCityData(placeId) {
    let body = { id: placeId };
    this.post("places/get_place", body).subscribe((response) => {
      this.placeData = response['data'];
    });
  }

  getCityAccommodations(cityId) {
    let body = { place_id: cityId };
    this.post("hotels/get_hotels", body).subscribe((response) => {
      this.hotels = response['data'];
    });
  }

  getExternalCityServices(placeId) {
    let body = { place_id: placeId };
    this.post("external_services/get_external_services", body).subscribe((response) => {
      this.services = response['data'];
    });
  }

  getCommunityInfo(eventId) {
    let body = {id: eventId};
    this.post("marathons/get_community", body).subscribe((response)=> {
      this.community = response['data'];
    });
  }

  newUserRegistration(email, name, pass, password_confirmation, targetScore) {
    let body = { email: email, name: name, password: pass, password_confirmation: password_confirmation, targetScore: targetScore};
    this.post("users/create_user",body).subscribe((response)=> {
      this.registerUserEmitter.emit(response);
      if(response['data'] === 'Success') {
        this.isLogged = true;
        this.userName = response['name'];
      }
    });
  }

  userLogin(email, password) {
    let body = {email: email, password: password};
    this.post("users/login_user", body).subscribe((response) => {
        this.loginEmitter.emit(response);
      if(response['jwt']) {
        this.isLogged = true;
        this.userName = response['name'];
      }
    });
  }

  resetPassword(email) {
    let body = {email: email};
    this.post("users/forgot_password", body).subscribe((response) => {
      console.log(response);
    });
  }

  sendMessage(body) {
    console.log('Send data: ' + body)
    this.post("users/contact_us", body).subscribe((response) => {
      console.log(response);
    });
  }

  usersConnection(userConnected, userConnectedTo) {
    let body = {userConnected: userConnected, userConnectedTo: userConnectedTo}
    this.post("users/connection", body).subscribe((response) => {
      console.log(response);
    });
  }


}
