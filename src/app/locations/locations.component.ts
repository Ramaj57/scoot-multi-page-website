import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MarkerComponent } from './marker/marker.component';

@Component({
  selector: 'app-locations',
  imports: [ButtonComponent, MarkerComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent {
  jobLocations = ['New York', 'London', 'Jakarta', 'Yokohama'];
  locationPage = {
    title: 'Locations',
    heading: 'Your city not listed?',
    content:
      'If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.',
  };
  location = this.locationPage;
  buttonText = signal<string>('Message us');
}
