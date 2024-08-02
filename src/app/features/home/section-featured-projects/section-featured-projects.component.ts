import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-featured-projects',
  templateUrl: './section-featured-projects.component.html',
  styleUrl: './section-featured-projects.component.scss',
})
export class SectionFeaturedProjectsComponent {
  constructor(private router: Router) {}
  goToProjects() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.router.navigate(['portfolio']);
  }
}
