import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AppConfig } from './core/config/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html'
})
export class App {
  config = AppConfig;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}