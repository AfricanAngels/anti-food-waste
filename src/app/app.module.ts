import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';

import { RouterModule, Routes } from '@angular/router';
import { SetLocationComponent } from './set-location/set-location.component'

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
    SetLocationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
