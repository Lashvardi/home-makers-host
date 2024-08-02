import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sup-text-title',
  templateUrl: './sup-text-title.component.html',
  styleUrl: './sup-text-title.component.scss'
})
export class SupTextTitleComponent {

  @Input() supTitle: string = '';
  @Input() title: string = '';
  @Input() supTitleFontSize: string = '16px';
  @Input() titleFontSize: string = '40px';

}
