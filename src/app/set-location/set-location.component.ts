import { NgModule, Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './../app-material/app-material.module';

import * as $ from 'jquery';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppMaterialModule
  ]
})
@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.component.html',
  styleUrls: ['./set-location.component.scss']
})

export class SetLocationComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      console.log("JQuery is working!!");
    });

    $(document).ready(function () {

      $('#dismiss, .overlay').on('click', function () {
          // hide sidebar
          $('.sidebar').removeClass('active');
          // hide overlay
          $('.overlay').removeClass('active');
      });

      $('#sidebarCollapse').on('click', function () {
          // open sidebar
          $('.sidebar').addClass('active');
          // fade in the overlay
          $('.overlay').addClass('active');
          $('.collapse.in').toggleClass('in');
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
  });

  }

}
