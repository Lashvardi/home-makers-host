import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { MessageComponent } from './message/message.component';
import { MessageMiniComponent } from './message-mini/message-mini.component';

@NgModule({
  declarations: [
    MessageComponent,
    MessageMiniComponent,
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
  ],
  exports: [
    MessageComponent,MessageMiniComponent
  ]
})
export class NotFoundModule { }
