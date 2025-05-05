import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NumberedImgCardComponent } from '../numbered-img-card/numbered-img-card.component';
import { JoinMissionCardComponent } from '../join-us-card/join-us-card.component';

@Component({
  selector: 'app-careers',
  imports: [
    ButtonComponent,
    NumberedImgCardComponent,
    JoinMissionCardComponent,
  ],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent {
  careerOptions = [
    { job: 'General Manager', site: 'Jakarta, Indonesia' },
    { job: 'UI/UX Designer', site: 'Yokohama, Japan' },
    { job: 'Blog Content Copywriter', site: 'New York, United States' },
    { job: 'Graphic Designer', site: 'New York, United States' },
    { job: 'Fleet Supervisor', site: 'Jakarta, Indonesia' },
    { job: 'UX Analyst', site: 'London, United Kingdom' },
  ];

  buttonText = signal<string>('Apply');
  numImage = signal<string>('Why join us?');
  career = signal<string>('Careers');
}
