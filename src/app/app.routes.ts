import { Routes } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from '../app/app.component';

export const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'marathons/:id', component: EventComponent },
  { path: 'select', component: EventSelectionComponent },
];
