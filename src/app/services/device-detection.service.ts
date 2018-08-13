import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Injectable()
export class DeviceDetectionService {

  constructor(private deviceService: DeviceDetectorService) {}

  isNotMobile() {
    return this.isDesktop || this.isTablet;
  }

  isMobile(): any {
    return this.deviceService.isMobile();
  }

  get isTablet() {
    return this.deviceService.isTablet();
  }

  get isDesktop() {
    return this.deviceService.isDesktop();
  }

}
