import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from "../services/api.service";
import {DeviceDetectionService} from "../services/device-detection.service";
import { ProgressBarService} from "../services/progress-bar.service"


@Component({
  selector: 'app-image-bar',
  templateUrl: './image-bar.component.html',
  styleUrls: ['./image-bar.component.scss']
})
export class ImageBarComponent implements OnInit {
  constructor(public apiService: ApiService, public deviceDetectionService: DeviceDetectionService,public  progressBarService: ProgressBarService) { }

  @Input() slides: Array<any>;
  @Input() placeName: any = false;

  ngOnInit() {}

  nextImage() {
    let temp = this.slides[0];
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i] = this.slides[i+1];
    }
    this.slides[this.slides.length - 1] = temp;
  }

  prevImage() {
    let temp = this.slides[this.slides.length - 1];
    for (let i = this.slides.length - 1; i > 0; i--) {
      this.slides[i] = this.slides[i-1];
    }
    this.slides[0] = temp;
  }

  openImageCarousel() {
    this.progressBarService.imagesEmitter.emit({images: this.slides, title: this.placeName});
  }
}
