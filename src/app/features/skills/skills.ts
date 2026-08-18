import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.services';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skills: any = {};
  categoryNames: string[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.skills = this.dataService.getSkills();
    this.categoryNames = Object.keys(this.skills);
  }
}
