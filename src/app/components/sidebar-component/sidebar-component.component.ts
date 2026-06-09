import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent {

  constructor(
    private navigation : Router) {
  }

  public navigateToCategory( category: string) {
    this.navigation.navigate(['/shop'], {
      queryParams: {
        category: category
      },
    });
  }

  public goToHome() {
    this.navigation.navigate(['']);
  }

  public goToProducts() {
    this.navigation.navigate(['/products']);
  }

  public goToPromotion() {
    this.navigation.navigate(['/promotions']);
  }
}
