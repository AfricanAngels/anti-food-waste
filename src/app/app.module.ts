import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';
// import { SetLocationComponent } from './set-location/set-location.component';
// import { ChooseActivityComponent } from './choose-activity/choose-activity.component';
// import { ListingHomepageComponent } from './listing-homepage/listing-homepage.component';
// import { ListingDescriptionComponent } from './listing-description/listing-description.component'
import { CoreModuleModule } from './core-module/core-module.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatSidenavModule,
    CoreModuleModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
