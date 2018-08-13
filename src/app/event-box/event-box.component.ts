import { Component, OnInit, Input } from '@angular/core';
import { DeviceDetectionService } from "../services/device-detection.service";
import { TotalPackageService } from "../services/total-package.service";
import { ApiService } from "../services/api.service";


@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {

  @Input() event: any;
  communityRanking: Array<number> =[];
  menRec:   string = '';
  womenRec: string = '';
  constructor(public deviceDetectionService: DeviceDetectionService, public totalPackageService: TotalPackageService, public apiService: ApiService) { }

  ngOnInit() {
    let records = this.event.fastest_time.split(';');
    this.menRec = records[0];
    this.womenRec = records[1] || 'NA' ;
    for (let i = 0; i < this.event.rating; i ++) {
      this.communityRanking.push(i);
    }
  }
}
