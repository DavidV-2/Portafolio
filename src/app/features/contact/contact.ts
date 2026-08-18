import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConfig } from '../../core/config/app.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  config = AppConfig;

  downloadCV() {
    const url = this.config.getCvUrl();
    window.open(url, '_blank');
  }
}
