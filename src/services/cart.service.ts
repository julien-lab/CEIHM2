import { Injectable } from '@angular/core';
import {Meal} from '../shared/models/Meal';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];

  constructor() { }

  addToCart(meal: Meal, personNumber: number): void{
    const myClonedMeal = Object.assign({}, meal);
    myClonedMeal.personNumber = personNumber;
    this.cart.push(myClonedMeal);
  }

  getCart(): Meal[]{
    return this.cart;
  }

  deleteMeal(meal: Meal): void{
    const index = this.cart.findIndex( (elementIndex) => elementIndex.id == meal.id);
    this.cart.splice(index, 1);
  }

}
