import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { SharedModule } from "../../shared/shared.module";
import { SectionAboutFormComponent } from './section-about-form/section-about-form.component';
import { SectionAboutEndComponent } from './section-about-end/section-about-end.component';
// ng g c features/about-us/about-us-page
// ყოველი ახალი გვერდის დამატებისას ng g component features/home/komponenti


@NgModule({
  declarations: [
    AboutUsPageComponent,
    SectionAboutFormComponent,
    SectionAboutEndComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
]
})
export class AboutUsModule { }
