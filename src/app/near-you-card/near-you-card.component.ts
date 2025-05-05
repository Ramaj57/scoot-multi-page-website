import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-near-you-card',
  imports: [ButtonComponent],
  templateUrl: './near-you-card.component.html',
  styleUrl: './near-you-card.component.css',
})
export class NearYouCardComponent {
  nearYouData = {
    image: { src: '/assets/images/near-you.jpg', alt: 'picture of a city' },
    line: {
      src: '/assets/patterns/right-arrow.svg',
      alt: 'arrow pointing right',
    },
    heading: 'Coming to a city near you',
    content:
      'Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.',
  };

  buttonText = signal<string>('Learn More');
  nearYou = this.nearYouData;
}
