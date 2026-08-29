import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppConfig } from '../../core/config/app.config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})

export class Contact {
  config = AppConfig;
  showScriptModal = false;
  scriptUrlSafe: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.scriptUrlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.scriptAppUrl);
  }
  openScriptModal() {
    this.showScriptModal = true;
  }
  
  closeScriptModal() {
    this.showScriptModal = false;
  }

  downloadCV() {
    const url = this.config.getCvUrl();
    window.open(url, '_blank');
  }
}
