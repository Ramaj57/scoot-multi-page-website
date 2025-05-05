import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { RouterLink } from '@angular/router';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { MobileMenuService } from '../mobileMenu.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, NavLinksComponent, RouterLink, NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  mobileMenu = inject(MobileMenuService);
  isActive = this.mobileMenu.isActive;
  buttonText = signal<string>('Get Scootin');
  onOpenMobileMenu() {
    this.mobileMenu.onOpenMobileMenu();
  }

  onCloseMobileMenu() {
    this.mobileMenu.onCloseMobileMenu();
  }
}
