import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-message-mini',
  templateUrl: './message-mini.component.html',
  styleUrl: './message-mini.component.scss'
})
export class MessageMiniComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() Padding: string = '';
}
