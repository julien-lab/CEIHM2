import { Injectable } from '@angular/core';
import {Meal} from '../shared/models/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor() { }

  getMealbyId(id: number): Meal {
    return this.getAllMeal().find(meal => meal.id == id)!;
  }

  getAllMeal(): Meal[] {
    return [
      {
        id: 1,
        title: 'Poulet Teriyaki',
        url: 'https://media.houra.fr/images/widget/recette/gd_recette_salade_chevre_chaud.jpg',
        ingredients: ['Poulet', 'Riz', 'Sucre', 'Gingembre', 'Huile de sésame', 'Sauce soja'],
        etapes: ['Mélangez le jus de gingembre avec la sauce de soja, et le sucre.', 'Ajoutez les morceaux de poulet à la sauce.', 'Couvrir et laissez reposer pendant 20 minutes.'],
        notes: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
      },
      {
        id: 2,
        title: 'Lasagnes',
        url: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.webp',
        ingredients: ['Trouvez', 'Quoi', 'Mettre', 'Ici'],
        etapes: ['Idem'],
        notes: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
      },
      {
        id: 3,
        title: 'Ratatouille',
        url: 'https://www.papillesetpupilles.fr/wp-content/uploads/2015/08/Ratatouille-%C2%A9comeirrez-shutterstock.jpg',
        ingredients: ['Trouvez', 'Quoi', 'Mettre', 'Ici'],
        etapes: ['Idem'],
        notes: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
      }
    ];
  }

}
