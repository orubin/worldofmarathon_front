import { Component, Input, OnInit} from '@angular/core';
import { TotalPackageService } from "../services/total-package.service"
import { DeviceDetectionService } from "../services/device-detection.service"

@Component({
  selector: 'app-video-container',
  templateUrl: './media-section.component.html',
  styleUrls: ['./media-section.component.scss']
})
export class VideoContainerComponent implements OnInit {

  videoSrc: string = '';
  slides: any = [];
  mediaType: string = 'video';
  imageNumber: number = 0;


  constructor(public totalPackageService: TotalPackageService, public deviceDetectionService: DeviceDetectionService) { }

  ngOnInit() {
    this.videoSrc = this.totalPackageService.selectedEvent.video_url + '?autoplay=1';
    this.slides = this.totalPackageService.selectedEvent.images;
    this.slides.push("../assets/images/general/video.png");
  }

  nextImage() {
    let temp = this.slides[0];
    for (let i = 0; i <this.slides.length; i++) {
      this.slides[i] = this.slides[i+1];
    }
    this.slides[this.slides.length - 1] = temp;
    if(this.slides[0].includes('video')) {
      this.mediaType = 'video';
    }else {
      this.mediaType = 'image';
    }
  }

  prevImage() {
    let temp = this.slides[this.slides.length - 1];
    for (let i = this.slides.length - 1; i > 0; i--) {
      this.slides[i] = this.slides[i-1];
    }
    this.slides[0] = temp;
    if(this.slides[0].includes('video')) {
      this.mediaType = 'video';
    }else {
      this.mediaType = 'image';
    }
  }

  selectImage(index){
    console.log(index);
    let temp = this.slides[0];
    this.slides[0] = this.slides[index];
    this.slides[index] = temp;
    if(this.slides[0].includes('video')) {
      this.mediaType = 'video';
    }else {
      this. mediaType = 'image';
    }
  }

}
