import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'about-us',
    loadChildren: () =>
      import('./features/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },

  {
    path: 'project/:projectId',
    loadChildren: () =>
      import('./features/single-project/single-project.module').then(
        (m) => m.SingleProjectModule
      ),
  },

  {
    path: 'services',
    loadChildren: () =>
      import('./features/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },

  {
    path: 'portfolio/:category',
    loadChildren: () =>
      import('./features/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
  },

  {
    path: 'contact-us',
    loadChildren: () =>
      import('./features/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
