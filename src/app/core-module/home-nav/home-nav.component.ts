import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnChanges {

  logo = '/src/assets/img/logo.svg';

  constructor() { }

  ngOnChanges() {

  }

}
