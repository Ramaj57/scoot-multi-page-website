import { Component } from '@angular/core';
import { ImgCardComponent } from "../shared/img-card/img-card.component";
import { ButtonComponent } from "../shared/button/button.component";
import { NumberedImgCardComponent } from "../shared/numbered-img-card/numbered-img-card.component";
import { buttonText, imageCard, noImageCard, numberedImageCard} from '../Data';
import { NoImgCardComponent } from "../shared/no-img-card/no-img-card.component";

@Component({
  selector: 'app-careers',
  imports: [ImgCardComponent, ButtonComponent, NumberedImgCardComponent, NoImgCardComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
imCard = imageCard;
noCard = noImageCard[0].Careers;
btnText = buttonText;
numCard = numberedImageCard;
}
