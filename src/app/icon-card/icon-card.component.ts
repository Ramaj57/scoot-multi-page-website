import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  imports: [NgStyle],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.css',
})
export class IconCardComponent {
  iconData = [
    {
      image: {
        src: '/assets/icons/locate.svg',
        alt: 'picture of a cell phone icon',
      },
      heading: 'Locate with app',
      content:
        'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.',
    },
    {
      image: {
        src: '/assets/icons/scooter.svg',
        alt: 'picture of a scooter icon',
      },
      heading: 'Pick your scooter',
      content:
        'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.',
    },
    {
      image: {
        src: '/assets/icons/ride.svg',
        alt: 'picture of a person on a scooter icon',
      },
      heading: 'Enjoy the ride',
      content:
        'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.',
    },
  ];

  icons = this.iconData;
}
