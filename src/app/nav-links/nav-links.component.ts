import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  imports: [NgClass, RouterLink],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  navLinks = ['About', 'Location', 'Careers'];
  vertical = input<boolean>();
  orientation = computed(() => {
    return this.vertical() ? 'vertical' : 'horizantal';
  });
}
