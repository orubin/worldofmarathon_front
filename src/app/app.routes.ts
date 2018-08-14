import { Routes } from '@angular/router';

import { EventHeaderComponent } from './event-header/event-header.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { AppComponent } from '../app/app.component'

export const ROUTES: Routes = [
  { path: '', component: AppComponent},
  { path: 'event', component: EventHeaderComponent },
  { path: 'select', component: EventSelectionComponent },
];
