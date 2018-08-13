import {Component, Input, OnInit} from '@angular/core';
import {ProgressBarService } from "../services/progress-bar.service"

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) { }

  @Input() hotel;
  hotelCommunityStars:Array<number> = [];
  hotelLevelStars:Array<number> = [];

  ngOnInit() {
    let communityStars = this.hotel.community_rating;
    if (communityStars === '') {
      communityStars = 2;
    }
    for (let i = 0; i< communityStars; i++ ) {
      this.hotelCommunityStars.push(i);
    }
    let leverStars = this.hotel.stars_rating;
    for (let i = 0; i< leverStars; i++ ) {
      this.hotelLevelStars.push(i);
    }
  }

  updateCarouselImages() {
    this.progressBarService.imagesEmitter.emit( {images: this.hotel.images, title: this.hotel.name});
  }

}
