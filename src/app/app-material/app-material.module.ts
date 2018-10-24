import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSidenavModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule
  ],
  declarations: []
})
export class AppMaterialModule { }
