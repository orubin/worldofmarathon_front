import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePickerComponent } from "../core/date-picker/date-picker.component";
import { ApiService } from '../services/api.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-accommodation-page',
  templateUrl: './accommodation-page.component.html',
  styleUrls: ['./accommodation-page.component.scss']
})
export class AccommodationPageComponent implements OnInit {

  public guests = [1,2,3,4,5,6,7];
  public rooms  = [1,2,3,4,5,6,7];
  public hotels : Array<Hotel>;

  hotelSearchStart: any = '';
  hotelSearchEnd: any = '';
  selectedRooms: number = 1;
  selectedGuests: number= 1;

  hotelsCategory: string = 'all';

  @ViewChild('hotelStartInput') private hotelStartInput: DatePickerComponent;
  @ViewChild('hotelEndInput') private hotelEndInput: DatePickerComponent;
  location: string = '';

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    if(this.apiService.hotels.length == 0) {
      this.apiService.getCityAccommodations(this.apiService.placeData.id);
    } else {
      this.hotels = this.apiService.hotels;
    }


    // this.hotels = [
    //   { name: 'Radisson Blu Amsterdam',
    //     imageUrl: 'imageUrl',
    //     rank: 4,
    //     price: 1123,
    //     provider: 'MR bedding',
    //     hotPoints: [
    //       {
    //         name: 'Distance from start', value: '1.2 KM'
    //       }, {
    //         name: 'Elevator', value: 'yes'
    //       },
    //       {
    //         name: 'Hotel restaurant', value: 'Recommenced by X users',
    //       }
    //     ],
    //     facilities: [
    //       {
    //         name: 'wifi', icon: 'icon link'
    //       },
    //       {
    //         name: 'Restaurant', icon: 'icon link'
    //       },
    //       {
    //         name: 'City center', icon: 'icon link'
    //       }
    //     ]
    //   },
    //   { name: 'David Intercontinental Amsterdam',
    //     imageUrl: 'imageUrl',
    //     rank: 2,
    //     price: 2150,
    //     provider: 'Hotely',
    //     hotPoints: [
    //       {
    //         name: 'Distance from start', value: '1.4 KM'
    //       }, {
    //         name: 'Elevator', value: 'No'
    //       },
    //       {
    //         name: 'Hotel restaurant', value: 'Recommenced by Y users',
    //       }
    //     ],
    //     facilities: [
    //       {
    //         name: 'wifi', icon: 'icon link'
    //       },
    //       {
    //         name: 'Restaurant', icon: 'icon link'
    //       },
    //       {
    //         name: 'City center', icon: 'icon link'
    //       }
    //     ]
    //   },
    //   { name: 'Central Voldenpark Amsterdam hotel',
    //     imageUrl: 'imageUrl',
    //     rank: 5,
    //     price: 5000,
    //     provider: 'AllHotels.com',
    //     hotPoints: [
    //       {
    //         name: 'Distance from start', value: '0.8 KM'
    //       }, {
    //         name: 'Elevator', value: 'yes'
    //       },
    //       {
    //         name: 'Hotel restaurant', value: 'Recommenced by Z users',
    //       }
    //     ],
    //     facilities: [
    //       {
    //         name: 'wifi', icon: 'icon link'
    //       },
    //       {
    //         name: 'Restaurant', icon: 'icon link'
    //       },
    //       {
    //         name: 'City center', icon: 'icon link'
    //       }
    //     ]
    //   }
    // ];
  }

  onRoomsSelect(value) {
    this.selectedRooms = value;
  }

  onGuestsSelect(value) {
    this.selectedGuests = value;
  }

  searchHotels() {
    this.hotelSearchStart = this.hotelStartInput.value;
    this.hotelSearchEnd   = this.hotelEndInput.value;

    console.log('Search hotels for' + this.selectedGuests + ' guests with ' + this.selectedRooms + ' rooms, Dates: ' + this.hotelSearchStart + ' to ' + this.hotelSearchEnd);
  }

}
