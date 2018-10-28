import { IProducts } from './../shared/products';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-listing-homepage',
  templateUrl: './listing-homepage.component.html',
  styleUrls: ['./listing-homepage.component.scss'],
  providers: [ProductService]
})
export class ListingHomepageComponent implements OnInit {

  products: IProducts[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
