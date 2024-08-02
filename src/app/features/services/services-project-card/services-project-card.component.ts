import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-project-card',
  templateUrl: './services-project-card.component.html',
  styleUrl: './services-project-card.component.scss'
})
export class ServicesProjectCardComponent {

  @Input() projectImage: any = '';
  @Input() projectLocation: string = '';
  @Input() projectIndex: number = 0;

}
