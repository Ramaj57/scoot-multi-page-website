import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-payments-card',
  imports: [ButtonComponent],
  templateUrl: './payments-card.component.html',
  styleUrl: './payments-card.component.css',
})
export class PaymentsCardComponent {
  paymentsData = {
    image: {
      src: '/assets/images/payments.jpg',
      alt: 'man taking money out of his wallet',
    },
    arrow: {
      src: '/assets/patterns/left-downward-arrow.svg',
      alt: 'arrow pointing left',
    },
    heading: 'Zero hassle payments',
    content:
      'Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.',
  };

  payments = this.paymentsData;
  buttonText = signal<string>('Learn More');
}
