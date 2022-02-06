import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Meal} from '../../shared/models/Meal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  public ingredients = ['2 blancs de poulet', '100g de riz', '2 càs de sucre', 'Gingembre', 'Huile de sésame', 'Sauce soja'];
  mealList: Meal[];

  constructor(private router: Router, private cartService: CartService) {
    this.mealList = cartService.getCart();
    console.log(cartService.getCart());
    /*if (router.getCurrentNavigation().extras.preserveFragment !== undefined) {
      this.message = this.router.getCurrentNavigation().extras.preserveFragment.valueOf();
    }*/
  }

  ngOnInit(): void {
  }

  public delete(): void{

  }

}
