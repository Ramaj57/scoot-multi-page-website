import { Component } from '@angular/core';
import { ImgCardComponent } from "../shared/img-card/img-card.component";
import { NumberedImgCardComponent } from "../shared/numbered-img-card/numbered-img-card.component";
import { FaqComponent } from "../faq/faq.component";
import { imageCard, numberedImageCard } from '../Data';

@Component({
  selector: 'app-about',
  imports: [ImgCardComponent, NumberedImgCardComponent, FaqComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
imCard = imageCard;
numCard = numberedImageCard;
}
