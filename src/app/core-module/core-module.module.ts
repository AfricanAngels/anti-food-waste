import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeNavComponent } from './home-nav/home-nav.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModuleRoutingModule,
  ],
  declarations: [
    SidenavComponent,
    HomeNavComponent
  ],
  exports: [
    SidenavComponent,
    HomeNavComponent
  ]
})
export class CoreModuleModule { }
