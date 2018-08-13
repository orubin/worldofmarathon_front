import { Component, OnInit } from '@angular/core';
import {ProgressBarService} from "../../services/progress-bar.service"

@Component({
  selector: 'app-carousel-modal',
  templateUrl: './carousel-modal.component.html',
  styleUrls: ['./carousel-modal.component.scss']
})
export class CarouselModalComponent implements OnInit {

  images: Array<string> = [];
  title:string = '';

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progressBarService.imagesEmitter.subscribe((imagesContent)=> {
      this.images = imagesContent.images;
      this.title =  imagesContent.title;
    });
  }

}
