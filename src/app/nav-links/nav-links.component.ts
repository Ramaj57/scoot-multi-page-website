import { Component } from '@angular/core';

const navLinks = ['About', 'Locations', 'Careers'];

@Component({
  selector: 'app-nav-links',
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  links = navLinks;
}
