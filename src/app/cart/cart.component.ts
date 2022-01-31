import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  message = true;

  public ingredients = ['2 blancs de poulet', '100g de riz', '2 càs de sucre', 'Gingembre', 'Huile de sésame', 'Sauce soja'];

  constructor(private router: Router) {
    /*if (router.getCurrentNavigation().extras.preserveFragment !== undefined) {
      this.message = this.router.getCurrentNavigation().extras.preserveFragment.valueOf();
    }*/
  }

  ngOnInit(): void {
  }

  public delete(): void{
    this.message = false;
}

}
