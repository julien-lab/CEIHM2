import { Component, OnInit } from '@angular/core';
import {MealService} from '../../services/meal.service';
import {Meal} from '../../shared/models/Meal';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../services/cart.service';

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
              private cartService: CartService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.meal = mealService.getMealbyId(params.id);
      }
    });
  }

  ngOnInit(): void {
  }

  addToCart(): void{
    this.cartService.addToCart(this.meal, this.personNumber);
    // console.log(this.cartService.getCart())
  }

}
