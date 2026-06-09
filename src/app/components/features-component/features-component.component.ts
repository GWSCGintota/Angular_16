import { Component } from '@angular/core';
import {Feature} from "../../model/feature";

@Component({
  selector: 'app-features-component',
  templateUrl: './features-component.component.html',
  styleUrls: ['./features-component.component.scss']
})
export class FeaturesComponentComponent {

  public features: Feature[] = [
    new Feature('local_shipping', 'Free Shipping', 'On all orders over $50'),
    new Feature('keyboard_return', 'Easy Returns', '30 days return policy'),
    new Feature('verified_user', 'Secure Payment', '100% secure payment'),
    new Feature('support_agent', '24/7 Support', 'Dedicated support'),
  ]

  public name = 'Shopy';

  constructor() { }

  onButtonClick() {
    this.name = 'Shopy' + Math.random();
  }
}
