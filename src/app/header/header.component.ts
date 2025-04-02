import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { buttonText } from '../Data';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  btnText = buttonText;
}
