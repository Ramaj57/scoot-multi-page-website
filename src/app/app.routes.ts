import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { LocationsComponent } from './locations/locations.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Careers',
    component: CareersComponent,
  },
  {
    path: 'Location',
    component: LocationsComponent,
  },
];
