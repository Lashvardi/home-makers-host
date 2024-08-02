import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-projects',
  templateUrl: './services-projects.component.html',
  styleUrl: './services-projects.component.scss'
})
export class ServicesProjectsComponent implements OnInit {

  headingTitle: string = 'our featured projects';
  
  checkWindowWidth() {
    if (window.innerWidth <= 1230) {
      this.headingTitle = 'our projects';
    } else {
      this.headingTitle = 'our featured projects';
    }
  }


  ngOnInit(): void {
    this.checkWindowWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth();
  }

  projects = [
    {
      projectImage: 'https://www.thespruce.com/thmb/9T1pfeh6aJr_qah3-SDME9oBrow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DesireeBurns_Boston_1Franklin_1-1714de8139854b3bbc2ffcdbfd333157.jpg',
      projectLocation: '415 9th street apartment reno',
    },
    {
      projectImage: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/267262611.jpg?k=c5202738fb9f021dcd0d0daa060d88d39eb60e27afd35f20b5d6b117d2849d88&o=&hp=1',
      projectLocation: '308 west 97th street',
    },
    {
      projectImage: 'https://www.redfin.com/blog/wp-content/uploads/2022/09/spacejoy-xkJ2_THgKmk-unsplash.jpg',
      projectLocation: '370 clearmont',
    },
  ];
}
