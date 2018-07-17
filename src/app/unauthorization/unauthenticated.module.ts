import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UnauthorizationComponent } from './unauthorization.component';


const appRoutes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    UnauthorizationComponent
  ],
  declarations: [
    UnauthorizationComponent
  ],
  providers: [
  ]
})
export class UnauthenticatedModule { }
