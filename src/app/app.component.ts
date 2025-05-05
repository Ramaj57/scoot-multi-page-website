import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgClass } from '@angular/common';
import { MobileMenuService } from './mobileMenu.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  mobileMenu = inject(MobileMenuService);
  isActive = this.mobileMenu.isActive;
  onCloseMobileMenu() {
    this.mobileMenu.onCloseMobileMenu();
  }
}
