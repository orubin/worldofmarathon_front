import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { Routes } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserAgreementPageComponent } from './user-agreement-page/user-agreement-page.component';

export const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'marathons/:id', component: EventComponent },
  { path: 'select', component: EventSelectionComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'user-agreement', component: UserAgreementPageComponent }
];
