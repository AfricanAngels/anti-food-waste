import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-verification-completed',
  templateUrl: './verification-completed.component.html',
  styleUrls: ['./verification-completed.component.scss']
})
export class VerificationCompletedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
