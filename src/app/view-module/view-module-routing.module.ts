import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingHomepageComponent } from './listing-homepage/listing-homepage.component';
import { ListingDescriptionComponent } from './listing-description/listing-description.component';
import { ChooseActivityComponent } from './choose-activity/choose-activity.component';

const ViewRoutes: Routes = [
  {path: 'listing', component: ListingHomepageComponent},
  {path: 'listing-description', component: ListingDescriptionComponent},
  {path: 'choose-activity', component: ChooseActivityComponent},
  {path: '', redirectTo: 'listing', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(ViewRoutes)],
  exports: [RouterModule]
})
export class ViewModuleRoutingModule { }
