import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectRoutingModule } from './single-project-routing.module';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';
import { SingleProjectSwiperComponent } from './single-project-swiper/single-project-swiper.component';
import { SingleProjectDescriptionComponent } from './single-project-description/single-project-description.component';
import { SharedModule } from "../../shared/shared.module";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';


@NgModule({
  declarations: [
    SingleProjectPageComponent,
    SingleProjectSwiperComponent,
    SingleProjectDescriptionComponent
  ],
  imports: [
    CommonModule,
    SingleProjectRoutingModule,
    SharedModule,
    NzCarouselModule
]
})
export class SingleProjectModule { }
