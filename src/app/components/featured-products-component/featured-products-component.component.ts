import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products-component',
  templateUrl: './featured-products-component.component.html',
  styleUrls: ['./featured-products-component.component.scss']
})
export class FeaturedProductsComponentComponent {

  products = [
    {
      name: 'Wireless Headphones',
      price: 59.99,
      image: 'assets/products/headphone.png'
    },
    {
      name: 'Smart Watch',
      price: 129.99,
      image: 'assets/products/watch.png'
    },
    {
      name: 'Camera',
      price: 499.99,
      image: 'assets/products/camera.png'
    },
    {
      name: 'Backpack',
      price: 39.99,
      image: 'assets/products/bag.png'
    }
  ];
}
