import { Component, inject, signal } from '@angular/core';
import { MobileMenuService } from '../mobileMenu.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css',
})
export class NavMenuComponent {
  navLinks = ['About', 'Location', 'Careers'];
  buttonText = signal<string>('Get Scootin');
  mobileMenu = inject(MobileMenuService);
  isActive = this.mobileMenu.isActive;
  onCloseMobileMenu() {
    this.mobileMenu.onCloseMobileMenu();
  }
}
