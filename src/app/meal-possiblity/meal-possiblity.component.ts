import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Meal} from '../../shared/models/Meal';
import {MealService} from '../../services/meal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './meal-possiblity.component.html',
  styleUrls: ['./meal-possiblity.component.css'],
})
export class MealPossiblityComponent implements OnInit {

  mealList: Meal[];

  constructor(private router: Router, private mealListService: MealService) {
    this.mealList = mealListService.getMealList();
    /*if (router.getCurrentNavigation().extras.preserveFragment !== undefined) {
      this.message = this.router.getCurrentNavigation().extras.preserveFragment.valueOf();
    }*/
  }

  ngOnInit(): void {
  }

  /*personNumber(){

  }*/

}
