import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../models/external_service';
import { ApiService } from "../services/api.service";

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
    this.availableServices = this.apiService.services;
  }

}
