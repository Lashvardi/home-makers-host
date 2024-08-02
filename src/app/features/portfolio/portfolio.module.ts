import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { SectionProjectsTitleComponent } from './section-projects-title/section-projects-title.component';
import { SectionApartamentCardsComponent } from './section-apartament-cards/section-apartament-cards.component';
import { SectionApartamentTitleComponent } from './section-apartament-title/section-apartament-title.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PortfolioPageComponent,
    SectionProjectsTitleComponent,
    SectionApartamentCardsComponent,
    SectionApartamentTitleComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
