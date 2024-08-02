import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-project-description',
  templateUrl: './single-project-description.component.html',
  styleUrl: './single-project-description.component.scss'
})
export class SingleProjectDescriptionComponent {

  formType: string = 'mini';

  checkWindowWidth() {
    if (window.innerWidth < 1200) {
      this.formType = 'large';
    } else {
      this.formType = 'mini';
    }

    console.log(this.formType);
    
  }

  ngOnInit() {
    this.checkWindowWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth();
  }

}
