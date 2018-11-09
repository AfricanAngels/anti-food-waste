import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationModuleRoutingModule } from './authentication-module-routing.module';
import { CoreModuleModule } from './../core-module/core-module.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModuleRoutingModule,
    CoreModuleModule
  ],
  declarations: [
    SignupComponent
  ],
  exports: [
    SignupComponent
  ]
})
export class AuthenticationModuleModule { }
