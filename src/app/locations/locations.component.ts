import { Component } from '@angular/core';
import { NoImgCardComponent } from "../shared/no-img-card/no-img-card.component";
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-locations',
  imports: [NoImgCardComponent, ButtonComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

}
