import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.services';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  projects: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.projects = this.dataService.getProjects();
  }
}
