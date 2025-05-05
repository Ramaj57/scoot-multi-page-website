import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconCardComponent } from '../icon-card/icon-card.component';
import { TelemetryCardComponent } from '../telemetry-card/telemetry-card.component';
import { NearYouCardComponent } from '../near-you-card/near-you-card.component';
import { PaymentsCardComponent } from '../payments-card/payments-card.component';

@Component({
  selector: 'app-home',
  imports: [
    ButtonComponent,
    IconCardComponent,
    TelemetryCardComponent,
    NearYouCardComponent,
    PaymentsCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homePage = {
    heading: 'Scooter sharing made simple',
    content:
      'Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!',
  };

  buttonText = signal<string>('Get Scootin');
  home = this.homePage;
}
