import { Component, input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  imports: [],
  templateUrl: './img-card.component.html',
  styleUrl: './img-card.component.css'
})
export class ImgCardComponent {
 src = input<string>('');
alt = input<string>('');
heading = input<string>('');
content = input<string>('');
lineSrc = input<string>('');
lineAlt = input<string>('');
}
