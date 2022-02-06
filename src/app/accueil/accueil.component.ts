import { Component, OnInit } from '@angular/core';
import {MealService} from '../../services/meal.service';
import {Meal} from '../../shared/models/Meal';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  mealList: Meal[];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  title = 'Apprendre à cuisiner';

  constructor(private mealService: MealService) {
    this.mealList = mealService.getAllMeal();
  }

  ngOnInit(): void {

  }

}

