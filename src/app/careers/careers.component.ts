import { Component } from '@angular/core';
import { ImgCardComponent } from "../shared/img-card/img-card.component";
import { ButtonComponent } from "../shared/button/button.component";
import { NumberedImgCardComponent } from "../shared/numbered-img-card/numbered-img-card.component";

@Component({
  selector: 'app-careers',
  imports: [ImgCardComponent, ButtonComponent, NumberedImgCardComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
