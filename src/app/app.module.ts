import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';

import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'verified', component: VerificationCompletedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    VerificationCompletedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
