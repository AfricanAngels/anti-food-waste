import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModuleModule } from '../core-module/core-module.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationModuleModule } from './../authentication-module/authentication-module.module';

import { ViewModuleRoutingModule } from './view-module-routing.module';
import { ListingHomepageComponent } from './listing-homepage/listing-homepage.component';
import { ListingDescriptionComponent } from './listing-description/listing-description.component';
import { ChooseActivityComponent } from './choose-activity/choose-activity.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AddItemsComponent } from './add-items/add-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewModuleRoutingModule,
    CoreModuleModule,
    AuthenticationModuleModule,
  ],
  declarations: [
    ListingHomepageComponent,
    ListingDescriptionComponent,
    ChooseActivityComponent,
    TextareaComponent,
    AddItemsComponent
  ],
  exports: [
    ListingHomepageComponent,
    ListingDescriptionComponent,
    ChooseActivityComponent
  ]
})
export class ViewModuleModule { }
