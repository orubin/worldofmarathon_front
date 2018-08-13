import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../models/external_service';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  public availableServices:Array<any>;

  public externalServices:Array<ExternalService>;

  ngOnInit() {
    //this.availableServices = this.apiService.services;
    // this.apiService.getExternalCityServices(10);

    this.availableServices = [
      {
        serviceName: 'Spa',
        serviceList: [{
            name: 'spa A',
            price: 400,
            rank: 4,
            imageLink: "../../assets/images/services/spa.jpg",
            amountAvailable: 8
        },{
          name: 'spa B',
          price: 300,
          rank: 4,
          imageLink: "../../assets/images/services/spa.jpg",
          amountAvailable: 8
        },{
          name: 'spa C',
          price: 200,
          rank: 3,
          imageLink: "../../assets/images/services/spa.jpg",
          amountAvailable: 8
        }
        ]
      },
      {
        serviceName: 'Restaurants',
        serviceList: [{
          name: 'restaurant A',
          rank: 4,
          imageLink: "../../assets/images/services/restarunt.jpg"
        },{
          name: 'restaurant B',
          rank: 4,
          imageLink: "../../assets/images/services/restarunt.jpg"
        },{
          name: 'restaurant C',
          rank: 3,
          imageLink: "../../assets/images/services/restarunt.jpg"
        }
        ]
      }
    ]
  }

}
