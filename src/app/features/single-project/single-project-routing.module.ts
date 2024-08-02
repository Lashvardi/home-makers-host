import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProjectPageComponent } from './single-project-page/single-project-page.component';

const routes: Routes = [

  {
    path: '',
    component: SingleProjectPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleProjectRoutingModule { }
