import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { navLinks } from '../Data';


@Component({
  selector: 'app-nav-links',
  imports: [NgClass],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  links = navLinks;
  isInFooter = input<boolean>();
  orientation = computed(() =>{
    return this.isInFooter() ? 'footer' : 'header';
  })
}
