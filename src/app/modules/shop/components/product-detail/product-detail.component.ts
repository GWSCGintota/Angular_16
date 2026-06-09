import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      image: 'assets/products/headphones.png',
      price: 59.99,
      oldPrice: 89.99,
      tag: 'NEW',
      category: 'electronic',
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      image: 'assets/products/watch.png',
      price: 129.99,
      oldPrice: 199.99,
      tag: 'SALE',
      category: 'electronic',
    },
    {
      id: 3,
      name: 'Digital Camera',
      image: 'assets/products/camera.png',
      price: 499.99,
      oldPrice: 699.99,
      tag: 'HOT',
      category: 'electronic',
    },
    {
      id: 4,
      name: 'Stylish Backpack',
      image: 'assets/products/bag.png',
      price: 39.99,
      oldPrice: 59.99,
      tag: '',
      category: 'fashion',
    },
    {
      id: 5,
      name: 'Sport Shoes',
      image: 'assets/products/shoes.png',
      price: 49.99,
      oldPrice: 79.99,
      tag: '',
      category: 'fashion',
    },
    {
      id: 6,
      name: 'Luxury Perfume',
      image: 'assets/products/perfume.png',
      price: 29.99,
      oldPrice: 49.99,
      tag: '',
      category: 'cosmetic',
    },
    {
      id: 7,
      name: 'Wireless Earbuds',
      image: 'assets/products/earbuds.png',
      price: 39.99,
      oldPrice: 69.99,
      tag: '',
      category: 'electronic',
    },
    {
      id: 8,
      name: 'Classic Sunglasses',
      image: 'assets/products/glasses.png',
      price: 19.99,
      oldPrice: 29.99,
      tag: '',
      category: 'fashion',
    }
  ];
  public product: any = {}

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params);
    if (productId) {
      this.product = this.products.filter((p) => p.id.toString() === productId)[0];
      console.log(this.product);
    }
  }
}
