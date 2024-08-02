import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormLargeComponent } from './form-large/form-large.component';
import { FormMiniComponent } from './form-mini/form-mini.component';
import { FormsModule } from '@angular/forms';
import { PortfolioCardsComponent } from './portfolio-cards/portfolio-cards.component';
import { SupTextTitleComponent } from './sup-text-title/sup-text-title.component';
import { NotFoundModule } from '../features/not-found/not-found.module';
import { MessageComponent } from '../features/not-found/message/message.component';

@NgModule({
  declarations: [HeaderComponent, FormLargeComponent, FormMiniComponent, PortfolioCardsComponent, SupTextTitleComponent],
  imports: [CommonModule, FormsModule,NotFoundModule],
  exports: [HeaderComponent, FormLargeComponent, FormMiniComponent,PortfolioCardsComponent,SupTextTitleComponent,MessageComponent],
})
export class SharedModule {}
