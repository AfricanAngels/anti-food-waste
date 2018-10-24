import { NgModule, Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      console.log("JQuery is working!!");
    });

    $(document).ready(function () {
      // $(".sidebar").mCustomScrollbar({
      //     theme: "minimal"
      // });

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
