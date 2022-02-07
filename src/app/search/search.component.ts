import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Meal} from '../../shared/models/Meal';
import {MealService} from '../../services/meal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private mealService: MealService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  search(): void{
    if (this.searchTerm){
      const allMeal = this.mealService.getAllMeal();
      const isFoundMeal = allMeal.find( (element) => element.title.toLowerCase() == this.searchTerm.toLowerCase());
      if (isFoundMeal != undefined) {
        console.log(this.searchTerm);
        this.router.navigateByUrl('meal-page/' + isFoundMeal.id);
        return;
      }
      const allIngredients = this.mealService.getAllIngredients();
      const isFoundIngredient = allIngredients.find( (element) => element.toLowerCase() == this.searchTerm.toLowerCase());
      if (isFoundIngredient){
        const mealList = [];
        for (const meal of allMeal){
          for (const ingredient of meal.ingredients){
            if (ingredient[1].toLowerCase().includes(this.searchTerm.toLowerCase())) { // specify the word
              mealList.push(meal);
            }
          }
        }
        console.log(mealList);
        this.mealService.setMealList(mealList);
        this.router.navigateByUrl('meal-possibility');
      }
    }
  }

}
