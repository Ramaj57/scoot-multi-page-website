import { Component, input } from '@angular/core';

@Component({
  selector: 'app-marker',
  imports: [],
  templateUrl: './marker.component.html',
  styleUrl: './marker.component.css',
})
export class MarkerComponent {
  location = input<string>('');
}
