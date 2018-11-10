import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationModuleRoutingModule } from './authentication-module-routing.module';
import { CoreModuleModule } from './../core-module/core-module.module';
import { SignupComponent } from './signup/signup.component';
import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';
import { SigninComponent } from './signin/signin.component';
import { SetLocationComponent } from './set-location/set-location.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationModuleRoutingModule,
    CoreModuleModule
  ],
  declarations: [
    SignupComponent,
    VerificationCompletedComponent,
    SigninComponent,
    SetLocationComponent
  ],
  exports: [
    SignupComponent,
    SigninComponent,
    VerificationCompletedComponent,
    SetLocationComponent
  ]
})
export class AuthenticationModuleModule { }
