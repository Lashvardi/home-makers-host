import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { SharedModule } from "../../shared/shared.module";
import { SectionCallUsComponent } from './section-call-us/section-call-us.component';


@NgModule({
  declarations: [
    ContactUsPageComponent,
    SectionCallUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
]
})
export class ContactUsModule { }
