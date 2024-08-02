import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ApiService } from '../../core/services/api.service';
import { SharedModule } from "../../shared/shared.module";
import { SliderComponent } from './slider/slider.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SectionFeaturedProjectsComponent } from './section-featured-projects/section-featured-projects.component';
import { SectionProjectCategoriesTitleComponent } from './section-project-categories-title/section-project-categories-title.component';
import { SectionProjectCategoriesComponent } from './section-project-categories/section-project-categories.component';


// ng g module features/home --routing
// ამას ვიყენებთ თუ გვინდა რომ შევქმნათ რაიმე მოდული თავის როუტინგიანად

@NgModule({
  declarations: [
    HomePageComponent,
    SliderComponent,
    SectionFeaturedProjectsComponent,
    SectionProjectCategoriesTitleComponent,
    SectionProjectCategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NzCarouselModule
  ],
  providers: [ApiService]
})
export class HomeModule { }
