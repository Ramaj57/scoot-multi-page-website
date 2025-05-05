import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-join-us-card',
  imports: [ButtonComponent],
  templateUrl: './join-us-card.component.html',
  styleUrl: './join-us-card.component.css',
})
export class JoinMissionCardComponent {
  joinUsData = {
    image: {
      src: '/assets/images/join-us.jpg',
      alt: 'picture of company meeting',
    },
    arrow: {
      src: '/assets/patterns/left-downward-arrow.svg',
      alt: 'arrow pointing left',
    },
    heading: 'Care to join our mission?',
    content:
      'We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!',
  };

  buttonText = signal<string>('Say Hello');
  joinUs = this.joinUsData;
}
