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

  searchTerm: String = '';
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
    const allMeal = this.mealService.getAllMeal();
    if (this.searchTerm){
      const isFound = allMeal.find( (element) => element.title.toLowerCase() == this.searchTerm.toLowerCase());
      if (isFound != undefined) {
        console.log(this.searchTerm);
        this.router.navigateByUrl('meal-page/' + isFound.id);
      }
    }
  }

}
