import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { WeatherService } from '../services/weather.service'
// import { ProgressBarService.} from "../services/progressBar.service"

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  public weatherSubscription: Subscription;
  weatherForecast: Array<any> = [];
  forecastLoaded: boolean = false;
  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCityWeather(52.3702,4.8952);

    this.weatherSubscription = this.weatherService.weatherEmitter.subscribe((data)=> {
      this.weatherForecast = data.DailyForecasts;
      let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

      for( let i = 0; i < this.weatherForecast.length; i++) {
        this.weatherForecast[i].Temperature.Maximum.Value = this.farToCel(this.weatherForecast[i].Temperature.Maximum.Value);
        this.weatherForecast[i].Temperature.Minimum.Value = this.farToCel(this.weatherForecast[i].Temperature.Minimum.Value);
        let d = new Date(data.DailyForecasts[i].Date);
        let dayName = days[d.getDay()];
        this.weatherForecast[i].dayName = dayName;
      }
      this.forecastLoaded = true;
      this.weatherService.weatherLoadedEmitter.emit(true);
    });
  }

  farToCel(value) {
    return Math.ceil((value -32) * (5/9) );
  }
}
