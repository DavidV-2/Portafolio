import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../../core/config/app.config';
import { DataService } from '../../core/services/data.services';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home.ts',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  config = AppConfig;

  constructor(private dataservice: DataService) {}

  ngOnInit() {}

  downloadCV() {
    const url = this.config.getCvUrl();
    window.open(url, '_blank');
  }

}
