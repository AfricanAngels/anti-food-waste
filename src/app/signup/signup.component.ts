import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  signupUser() {
    this.router.navigateByUrl('/verified');
  }

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
