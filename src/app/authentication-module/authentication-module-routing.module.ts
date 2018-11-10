import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { VerificationCompletedComponent } from './verification-completed/verification-completed.component';
import { SigninComponent } from './signin/signin.component';
import { SetLocationComponent } from './set-location/set-location.component';

const authRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'verify', component: VerificationCompletedComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'set-location', component: SetLocationComponent},
  {path: '', redirectTo: 'signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthenticationModuleRoutingModule { }
