import { Component, signal, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-telemetry-card',
  imports: [ButtonComponent],
  templateUrl: './telemetry-card.component.html',
  styleUrl: './telemetry-card.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TelemetryCardComponent {
  telemetryData = {
    image: {
      src: '/assets/images/telemetry.jpg',
      alt: 'picture of boy looking at his cell phone',
    },
    arrow: {
      src: '/assets/patterns/left-downward-arrow.svg',
      alt: 'arrow pointing left',
    },
    heading: 'Easy to use riding telemetry',
    content:
      "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
  };

  telemetry = this.telemetryData;
  buttonText = signal<string>('Learn More');
}
