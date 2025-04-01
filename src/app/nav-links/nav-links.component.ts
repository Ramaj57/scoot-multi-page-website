import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

const navLinks = ['About', 'Locations', 'Careers'];

@Component({
  selector: 'app-nav-links',
  imports: [NgClass],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  links = navLinks;
  inFooter = input<boolean>();
  orientation = computed(() =>{
    return this.inFooter() ? 'footer' : 'header';
  })
}
