import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './../app-material/app-material.module';

import {} from '@types/googlemaps';
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
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);


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
