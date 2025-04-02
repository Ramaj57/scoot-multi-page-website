import { Component } from '@angular/core';
import { NoImgCardComponent } from "../shared/no-img-card/no-img-card.component";
import { ButtonComponent } from "../shared/button/button.component";
import { ImgCardComponent } from "../shared/img-card/img-card.component";
import { buttonText, iconCard, imageCard, noImageCard } from '../Data';
import { IconCardComponent } from "../icon-card/icon-card.component";

@Component({
  selector: 'app-home',
  imports: [NoImgCardComponent, ButtonComponent, ImgCardComponent, IconCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
btnText = buttonText;
 imCard = imageCard[0].Home;
 noCard = noImageCard[0].Home;
 icCard = iconCard;
}
