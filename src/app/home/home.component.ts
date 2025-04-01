import { Component } from '@angular/core';
import { NoImgCardComponent } from "../shared/no-img-card/no-img-card.component";
import { ButtonComponent } from "../shared/button/button.component";
import { ImgCardComponent } from "../shared/img-card/img-card.component";

@Component({
  selector: 'app-home',
  imports: [NoImgCardComponent, ButtonComponent, ImgCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
