import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', loadChildren: './authentication-module/authentication-module.module#AuthenticationModuleModule'},
  {path: 'core', loadChildren: './core-module/core-module.module#CoreModuleModule'},
  {path: 'view', loadChildren: './view-module/view-module.module#ViewModuleModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
