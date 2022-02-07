import { Component, OnInit } from '@angular/core';
import {MealService} from '../../services/meal.service';
import {Meal} from '../../shared/models/Meal';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {MatDialog} from '@angular/material/dialog';
import {AddedToCartDialogComponent} from '../added-to-cart-dialog/added-to-cart-dialog.component';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meal!: Meal;
  personNumber = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private mealService: MealService,
              private cartService: CartService,
              public dialog: MatDialog) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.meal = mealService.getMealbyId(params.id);
      }
    });
  }

  ngOnInit(): void {
  }

  addToCart(): void{
    if (!this.cartService.getCart().find( (element) => element.id == this.meal.id)){
      this.cartService.addToCart(this.meal, this.personNumber);
      this.dialog.open(AddedToCartDialogComponent, {
        data : {
          message: 'The meal has been added to your food list',
        },
      });
    }
    else {
      this.dialog.open(AddedToCartDialogComponent, {
        data : {
          message: 'The meal is already in your food list',
        },
      });
    }
  }

}


