import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-numbered-img-card',
  imports: [NgStyle],
  templateUrl: './numbered-img-card.component.html',
  styleUrl: './numbered-img-card.component.css',
})
export class NumberedImgCardComponent {
  numberedImageCard = [
    {
      image: {
        src: '/assets/images/our-tech.jpg',
        alt: 'picture with hand using a cell phone',
      },
      number: '01',
      heading: 'Our tech',
      content:
        'We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!',
    },
    {
      image: {
        src: '/assets/images/our-integrity.jpg',
        alt: 'picture of a man driving a scooter',
      },
      number: '02',
      heading: 'Our integrity',
      content:
        'We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.',
    },
    {
      image: {
        src: '/assets/images/our-community.jpg',
        alt: 'picture of a group walking down the street',
      },
      number: '03',
      heading: 'Our community',
      content:
        'We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.',
    },
  ];

  numCard = this.numberedImageCard;
  title = input<string>('');
}
