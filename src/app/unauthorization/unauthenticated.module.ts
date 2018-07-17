import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UnauthorizationComponent } from './unauthorization.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    UnauthorizationComponent,
    LoginComponent
  ],
  declarations: [
    UnauthorizationComponent,
    LoginComponent
  ],
  providers: [
  ]
})
export class UnauthenticatedModule { }
