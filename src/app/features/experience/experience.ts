import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.services';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class Experience implements OnInit {
  experiences : any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.experiences = this.dataService.getExperience();
  }
}