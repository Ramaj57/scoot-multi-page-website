import { Component } from '@angular/core';
import { faQuestions } from '../Data';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = faQuestions;
}
