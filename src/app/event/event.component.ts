import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { TotalPackageService } from "../services/total-package.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  id: number;

  private sub: any;

  isDataAvailable:boolean = false;

  constructor(private route: Router,
    public apiService: ApiService,
    public totalPackageService: TotalPackageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.totalPackageService.selectedEvent){
      this.isDataAvailable = true;
    }
    else{
      this.sub = this.activatedRoute.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        
        this.apiService.getEventData(this.id);
        this.apiService.getAny(this.id).subscribe((data) => {
          this.totalPackageService.selectedEvent = data['data'];
          this.isDataAvailable = true;
        });

      });
    }

  }

}
