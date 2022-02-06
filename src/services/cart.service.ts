import { Injectable } from '@angular/core';
import {Meal} from '../shared/models/Meal';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];

  constructor() { }

  addToCart(meal: Meal): void{
    this.cart.push(meal);
  }

  getCart(): Meal[]{
    return this.cart;
  }
}
