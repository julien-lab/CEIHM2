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

  mealList: Meal[];

  constructor(private router: Router, private cartService: CartService) {
    this.mealList = cartService.getCart();
    /*if (router.getCurrentNavigation().extras.preserveFragment !== undefined) {
      this.message = this.router.getCurrentNavigation().extras.preserveFragment.valueOf();
    }*/
  }

  ngOnInit(): void {
  }

  personNumber(){

  }

  public delete(meal: Meal): void{
    this.cartService.deleteMeal(meal);
  }

}
