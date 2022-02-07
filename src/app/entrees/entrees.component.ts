import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Meal} from '../../shared/models/Meal';
import {MealService} from '../../services/meal.service';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {

  entreeList: Meal[];
  enable = false;

  constructor(private mealService: MealService) {
    this.entreeList = mealService.getAllEntrees();
  }

  ngOnInit(): void {
  }

}
