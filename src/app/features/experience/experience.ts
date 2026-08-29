import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  experiences : any[] = [];
  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.experiences = this.dataService.getExperience();
  }

  scrollCarousel(direction: number): void {
    if (this.carousel) {
      const scrollAmount = this.carousel.nativeElement.clientWidth;
      this.carousel.nativeElement.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}