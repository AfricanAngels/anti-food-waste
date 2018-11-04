import { Injectable } from '@angular/core';
import { IProducts } from './../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProducts[] {
    return [
      {
        'productId': 1,
        'productName': 'Small bag of rice',
        'productDescription': 'These are available from a family party for limited period family party for limited period family party for limited period family party for limited period',
        'productLocation': 'Ajah',
        'author': 'Jide Lambo',
        'productImg': 'small-rice.png'
      },
      {
        'productId': 2,
        'productName': 'Basket full of potatoes',
        'productDescription': 'These are available from a family party for limited period…',
        'productLocation': 'Yaba',
        'author': 'Nifesimi',
        'productImg': 'potato-basket.png'
      }
    ];
  }
}
