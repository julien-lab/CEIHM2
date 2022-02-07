import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Meal} from '../../shared/models/Meal';
import {MealService} from '../../services/meal.service';
import {MatDialog} from '@angular/material/dialog';
import {AddedToCartDialogComponent} from '../added-to-cart-dialog/added-to-cart-dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private mealService: MealService,
              public dialog: MatDialog) { }

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
        this.mealService.setMealList(mealList);
        this.router.navigateByUrl('meal-possibility');
        return;
      }
      this.dialog.open(AddedToCartDialogComponent, {
        data : {
          message: 'Rien ne correspond à votre recherche',
        },
      });
    }
  }

}
