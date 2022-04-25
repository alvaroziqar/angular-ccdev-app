import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Core y Shared
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

// Pages
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login/login-page.component';

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
