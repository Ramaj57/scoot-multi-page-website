import { Component } from '@angular/core';
import { NavLinksComponent } from "../nav-links/nav-links.component";
import { buttonText } from '../Data';

@Component({
  selector: 'app-footer',
  imports: [NavLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  btnText = buttonText;
}
