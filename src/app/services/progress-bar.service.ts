import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Response, URLSearchParams } from '@angular/http';

@Injectable()
export class ProgressBarService {

  contentUpdatedEmitter = new EventEmitter<any>();
  imagesEmitter = new EventEmitter<any>();

  sessionIdSubscription: Subscription;

  constructor() { }

}
