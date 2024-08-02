import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorComponent } from './features/not-found/error/error.component';
import { PopupComponent } from './layout/popup/popup.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzModalModule } from 'ng-zorro-antd/modal';

registerLocaleData(en);
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './core/services/api.service';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { NotFoundModule } from './features/not-found/not-found.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    PopupComponent,
    SidebarComponent,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
    ApiService,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NzModalModule,
    SidebarModule,
    NotFoundModule,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
