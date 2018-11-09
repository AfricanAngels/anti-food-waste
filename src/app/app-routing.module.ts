import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', loadChildren: './authentication-module/authentication-module.module#AuthenticationModuleModule'},
  // {path: 'verified', component: VerificationCompletedComponent},
  // {path: 'set-location', component: SetLocationComponent},
  // {path: 'choose-activity', component: ChooseActivityComponent},
  // {path: 'listings', component: ListingHomepageComponent},
  // {path: 'list-description', component: ListingDescriptionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
