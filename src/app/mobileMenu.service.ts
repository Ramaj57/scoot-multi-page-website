import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileMenuService {
  isActive = signal<boolean>(false);
  onOpenMobileMenu() {
    this.isActive.set(true);
  }

  public onCloseMobileMenu() {
    this.isActive.set(false);
  }
}
