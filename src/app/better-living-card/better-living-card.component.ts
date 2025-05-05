import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-better-living-card',
  imports: [],
  templateUrl: './better-living-card.component.html',
  styleUrl: './better-living-card.component.css',
})
export class UrbanLivingCardComponent {
  betterLivingData = {
    image: {
      src: '/assets/images/better-living.jpg',
      alt: 'picture of a train',
    },
    arrow: {
      src: '/assets/patterns/right-arrow.svg',
      alt: 'arrow pointing right',
    },
    heading: 'Better urban living',
    content:
      'We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.',
  };

  src = signal<string>('');
  alt = signal<string>('');
  heading = signal<string>('');
  content = signal<string>('');
  arrowSrc = signal<string>('');
  arrowAlt = signal<string>('');
  betterLiving = this.betterLivingData;
}
