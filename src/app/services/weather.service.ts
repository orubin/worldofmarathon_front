import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response, URLSearchParams } from '@angular/http';


const apiKey = 'NjqdbKPAe1LVWQIEW7AETXtFG2pYoxyh';

@Injectable()
export class WeatherService {

  weatherEmitter = new EventEmitter<any>();
  weatherLoadedEmitter = new EventEmitter<any>();

  constructor(public http: Http) {

  }

  getCityWeather(lat, lng) {
    let geo = lat + ',' + lng;
    return this.http.get('https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + apiKey + '&q=' + geo).map((res: Response) => res.json()).subscribe((data) => {
      let cityKey = data.Key;
      return this.http.get('https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + cityKey +'?apikey=' + apiKey).map((res: Response) => res.json()).subscribe((data) => {
        this.weatherEmitter.emit(data);
      });
    });
  }

}
