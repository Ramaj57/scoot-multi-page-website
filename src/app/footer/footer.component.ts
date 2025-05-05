import { Component, signal } from '@angular/core';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [NavLinksComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerText = signal<string>('Sign up and Scoot off today');
}
