import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  imports: [],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.css'
})
export class IconCardComponent {
src = input<string>('');
alt = input<string>('');
heading = input<string>('');
content = input<string>('');
}
