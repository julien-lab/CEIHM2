import { Injectable } from '@angular/core';
import {Meal} from '../shared/models/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealList: Meal[];

  constructor() { }

  setMealList(mealList: Meal[]): void{
    this.mealList = mealList;
  }

  getMealList(): Meal[]{
    return this.mealList;
  }

  getMealbyId(id: number): Meal {
    return this.getAllMeal().find(meal => meal.id == id)!;
  }

  getAllIngredients(): string[]{
    return ['Poulet', 'Riz', 'Sucre', 'Gingembre', 'Huile de sésame', 'Soja', 'Pâtes', 'Beurre', 'Farine', 'Lait', 'Oignon', 'Ail', 'Tomate',
            'Fromage', 'Parmesan', 'Boeuf', 'Aubergine', 'Courgette', 'Poivron', 'Huile d\'Olive', 'Thym'];
  }

  getAllMeal(): Meal[] {
    return [
      {
        id: 1,
        title: 'Poulet Teriyaki',
        url: 'https://media.houra.fr/images/widget/recette/gd_recette_salade_chevre_chaud.jpg',
        ingredients: [['200', 'g de poulet'], ['300', 'g de riz'], ['10', 'g de sucre'],
          ['4', 'ml de gingembre'], ['1', ' cuillière à soupe d\'huile de sésame'], ['1', ' cuillière à café de Sauce soja']],
        etapes: ['Mélangez le jus de gingembre avec la sauce de soja, et le sucre.', 'Ajoutez les morceaux de poulet à la sauce.', 'Couvrir et laissez reposer pendant 20 minutes.'],
        notes: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
        personNumber: 1,
      },
      {
        id: 2,
        title: 'Lasagnes',
        url: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.webp',
        ingredients: [['125', 'g de beurre'], ['100', 'g de farine'], ['1', 'L de lait'],
          ['1', 'kg de pâtes'], ['3', ' oignons jaune'], ['2', ' gousses d\'ail'], ['800', 'g de purée de tomate'],
          ['70', 'g de fromage râpé'], ['125', 'g de parmesan'], ['600', 'g de boeuf haché']],
        etapes: ['Idem'],
        notes: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
        personNumber: 1,
      },
      {
        id: 3,
        title: 'Ratatouille',
        url: 'https://www.papillesetpupilles.fr/wp-content/uploads/2015/08/Ratatouille-%C2%A9comeirrez-shutterstock.jpg',
        ingredients: [['350', 'g d\'aubergine'], ['300', 'g de courgette'], ['350', 'g de poivron rouge et vert'],
          ['350', 'g d\'oignon'], ['500', 'g de tomate'], ['3', ' gousses d\'ail'], ['6', ' cuillières à soupe d\'huile d\'olive'], ['1', ' brin de thym']],
        etapes: ['Idem'],
        notes: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
        personNumber: 1,
      }
    ];
  }

}
