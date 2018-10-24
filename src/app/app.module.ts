import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { AppMaterialModule } from './app-material/app-material.module';
import { MatSidenavModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';

import { RouterModule, Routes } from '@angular/router';
import { SetLocationComponent } from './set-location/set-location.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChooseActivityComponent } from './choose-activity/choose-activity.component'

const appRoutes: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'verified', component: VerificationCompletedComponent},
  {path: 'set-location', component: SetLocationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    VerificationCompletedComponent,
    SetLocationComponent,
    SidenavComponent,
    ChooseActivityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    // AppMaterialModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
