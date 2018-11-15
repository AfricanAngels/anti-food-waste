import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listing-description',
  templateUrl: './listing-description.component.html',
  styleUrls: ['./listing-description.component.scss']
})
export class ListingDescriptionComponent implements OnInit {

  isHidden: boolean = false;
  textareaHidden: boolean = true;

  constructor(private location: Location) { }

  requestItem() {
    this.isHidden = true;
    this.textareaHidden = false;
  }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}
