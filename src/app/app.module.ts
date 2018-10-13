import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from "@angular/forms";


// APP COMPONENTS
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { EventHeaderComponent } from './event-header/event-header.component';
import { TotalPackageComponent } from './total-package/total-package.component';
import { VideoContainerComponent } from './media-section/media-section.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ContentComponent } from './content/content.component';
import { EventPageComponent } from './event-page/event-page.component';
import { AccommodationPageComponent } from './accommodation-page/accommodation-page.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { AttractionComponent } from './attraction/attraction.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HotelComponent } from './hotel/hotel.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ServiceComponent } from './service/service.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { TextInputComponent } from './core/text-input/text-input.component';
import { UserComponent } from './user/user.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { EventBoxComponent } from './event-box/event-box.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ImageBarComponent } from './image-bar/image-bar.component';

// APP SERVICES
import { TotalPackageService } from './services/total-package.service'
import { ProgressBarService } from './services/progress-bar.service'
import { WeatherService } from './services/weather.service'
import { ApiService } from './services/api.service'
import { DeviceDetectionService } from './services/device-detection.service'
import { EventSearchBarComponent } from './event-search-bar/event-search-bar.component';


// CORE COMPONENTS
import { RoundImageComponent } from './core/round-image/round-image.component';
import { ButtonComponent } from './core/button/button.component';
import { DatePickerComponent } from './core/date-picker/date-picker.component';
import {SafePipe} from "./pipes/safePipe";
import { CarouselModalComponent } from './core/carousel-modal/carousel-modal.component';
import { GeneralModalComponent } from './core/general-modal/general-modal.component';



// VENDOR IMPORTS
import { SlickModule } from 'ngx-slick';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import {MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { NouisliderModule } from 'ng2-nouislider';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { TooltipModule } from "ngx-tooltip";
import { EventComponent } from './event/event.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoundImageComponent,
    EventHeaderComponent,
    TotalPackageComponent,
    ButtonComponent,
    VideoContainerComponent,
    ProgressBarComponent,
    ContentComponent,
    EventPageComponent,
    PlacePageComponent,
    AttractionComponent,
    ForecastComponent,
    AccommodationPageComponent,
    DatePickerComponent,
    TextInputComponent,
    HotelComponent,
    ServicesPageComponent,
    ServiceComponent,
    CommunityPageComponent,
    UserComponent,
    EventSelectionComponent,
    EventBoxComponent,
    FooterComponent,
    HomepageComponent,
    LoginModalComponent,
    CarouselModalComponent,
    ImageBarComponent,
    SafePipe,
    EventSearchBarComponent,
    GeneralModalComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBh-ap_SPo9ipvpljxjQ2k_Kuf5UQvYEUY'
    }),
    RouterModule.forRoot(ROUTES, {
      // useHash: Boolean(history.pushState) === false,
      // preloadingStrategy: PreloadAllModules
    }),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NouisliderModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
    TooltipModule
  ],
  providers: [
    TotalPackageService,
    ProgressBarService,
    WeatherService,
    ApiService,
    DeviceDetectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
