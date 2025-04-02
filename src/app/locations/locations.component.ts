import { Component } from '@angular/core';
import { NoImgCardComponent } from "../shared/no-img-card/no-img-card.component";
import { ButtonComponent } from "../shared/button/button.component";
import { jobLocations, noImageCard } from '../Data';

@Component({
  selector: 'app-locations',
  imports: [NoImgCardComponent, ButtonComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
noCard = noImageCard[0].Locations;
locations = jobLocations;
}
