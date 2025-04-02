import { Component, input } from '@angular/core';
import { numberedImageCard } from '../../Data';

@Component({
  selector: 'app-numbered-img-card',
  imports: [],
  templateUrl: './numbered-img-card.component.html',
  styleUrl: './numbered-img-card.component.css',
})
export class NumberedImgCardComponent {
  src = input<string>('');
  alt = input<string>('');
  heading = input<string>('');
  content = input<string>('');
  number = input<string>('');
  numCard = numberedImageCard;
}
