import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-digital-era-card',
  imports: [],
  templateUrl: './digital-era-card.component.html',
  styleUrl: './digital-era-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DigitalEraCardComponent {
  digitalEraData = {
    image: {
      src: '/assets/images/digital-era.jpg',
      alt: 'girl looking at her cell phone',
    },
    arrow: {
      src: '/assets/patterns/left-upward-arrow.svg',
      alt: 'arrow pointing left',
    },
    heading: 'Mobility for the digital era',
    content:
      'Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.',
  };

  digitalEra = this.digitalEraData;
}
