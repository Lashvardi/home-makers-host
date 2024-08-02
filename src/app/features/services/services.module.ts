import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ServicesShowcaseComponent } from './services-showcase/services-showcase.component';
import { ServicesProjectsComponent } from './services-projects/services-projects.component';
import { SharedModule } from '../../shared/shared.module';
import { ServicesProjectCardComponent } from './services-project-card/services-project-card.component';


@NgModule({
  declarations: [
    ServicesPageComponent,
    ServicesShowcaseComponent,
    ServicesProjectsComponent,
    ServicesProjectCardComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
