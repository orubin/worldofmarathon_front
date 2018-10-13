import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs";
import { WeatherService } from "../services/weather.service";
import { DatePickerComponent } from "../core/date-picker/date-picker.component";
import { ApiService } from '../services/api.service';
import { Place } from '../models/place';


@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.scss'],

})
export class PlacePageComponent implements OnInit {

  @ViewChild('attractionStartInput') private attractionStartInput: DatePickerComponent;
  @ViewChild('attractionEndInput') private attractionEndInput: DatePickerComponent;
  public place : Place;
  public markers : Array<any> = [];

  attractions: Array<any> = [];
  weatherLoadedSubscription: Subscription;
  isWeatherLoaded: boolean = false;
  attractionSearchStart: any = '';
  attractionSearchEnd: any = '';
  mapData = {
    zoom: 12,
    eventLocation: {lat:0, lng: 0}
  };

  constructor(public weatherService: WeatherService, public apiService: ApiService) { }

  ngOnInit() {
    this.place = this.apiService.placeData;

    this.mapData.eventLocation = {
      lat: parseFloat(this.place.latitude) ,
      lng: parseFloat(this.place.longitude)
    };

    this.attractions = [
      {name: 'Beyonce concert', date: 'July 16, 2018 12:00:00', location: {name: 'Amsterdam Arena', geo: {lat:52.3702, lng:4.8952}},attending: [1,3,5,9, 14], price: 50},
      {name: 'Amsterdam wine festival', date: 'July 15, 2018 12:00:00', location: {name: 'Amsterdam Arena', geo: {lat:52.3702, lng:4.8952}}, attending: [1,3,5,9, 45], price: 50},
      {name: 'Ajax amsterdam - NAC Breda', date: 'July 16, 2018 12:00:00', location: {name: 'Amsterdam Arena', geo: {lat:52.3702, lng:4.8952}}, attending: [1,3,5,9,7,12], price: 50}
    ];

    this.weatherLoadedSubscription = this.weatherService.weatherLoadedEmitter.subscribe((data)=> {
      this.isWeatherLoaded = true;
    });
  }

  searchAttractions() {
    this.attractionSearchStart = this.attractionStartInput.value;
    this.attractionSearchEnd   = this.attractionEndInput.value;
    console.log("Search for attractions between: " + this.attractionSearchStart + " and " + this.attractionSearchEnd);
  }
}
