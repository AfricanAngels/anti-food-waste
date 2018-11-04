import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';
import { SetLocationComponent } from './set-location/set-location.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChooseActivityComponent } from './choose-activity/choose-activity.component';
import { HomeNavComponent } from './shared/home-nav/home-nav.component';
import { ListingHomepageComponent } from './listing-homepage/listing-homepage.component';
import { ListingDescriptionComponent } from './listing-description/listing-description.component'

const appRoutes: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'verified', component: VerificationCompletedComponent},
  {path: 'set-location', component: SetLocationComponent},
  {path: 'choose-activity', component: ChooseActivityComponent},
  {path: 'listings', component: ListingHomepageComponent},
  {path: 'list-description', component: ListingDescriptionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    VerificationCompletedComponent,
    SetLocationComponent,
    SidenavComponent,
    ChooseActivityComponent,
    HomeNavComponent,
    ListingHomepageComponent,
    ListingDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
