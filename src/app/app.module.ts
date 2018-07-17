import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UnauthorizationComponent } from './unauthorization/unauthorization.component';
import { HomepageComponent } from './unauthorization/homepage/homepage.component';
import { UnauthenticatedModule } from './unauthorization/unauthenticated.module';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthorizationComponent,
  ],
  imports: [    
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    UnauthenticatedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
