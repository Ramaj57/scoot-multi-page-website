import { Component, signal } from '@angular/core';
import { NumberedImgCardComponent } from '../numbered-img-card/numbered-img-card.component';
import { FaqComponent } from '../faq/faq.component';
import { DigitalEraCardComponent } from '../digital-era-card/digital-era-card.component';
import { UrbanLivingCardComponent } from '../better-living-card/better-living-card.component';

@Component({
  selector: 'app-about',
  imports: [
    NumberedImgCardComponent,
    FaqComponent,
    DigitalEraCardComponent,
    UrbanLivingCardComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about = signal<string>('About');
  numImage = signal<string>('Our values');
}
