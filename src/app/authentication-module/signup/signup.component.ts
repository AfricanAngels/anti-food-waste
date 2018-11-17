import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  firstname: string = '';

  constructor(private router: Router) { }

  signupUser() {
    this.router.navigateByUrl('/verified');
  }

  signinUser() {}

  ngOnInit() {

  }

}
