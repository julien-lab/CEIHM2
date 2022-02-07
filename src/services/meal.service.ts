import { Injectable } from '@angular/core';
import {Meal} from '../shared/models/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealListWithSpecificIngredients: Meal[];

  constructor() { }

  setMealList(mealList: Meal[]): void{
    this.mealListWithSpecificIngredients = mealList;
  }

  getMealList(): Meal[]{
    return this.mealListWithSpecificIngredients;
  }

  getMealbyId(id: number): Meal {
    return this.getAllMeal().find(meal => meal.id == id)!;
  }

  getAllIngredients(): string[]{
    return this.ingredients;
  }

  getAllMeal(): Meal[] {
    return this.mealList;
  }


  public ingredients = ['Poulet', 'Riz', 'Sucre', 'Gingembre', 'Huile de sésame', 'Soja', 'Pâtes', 'Beurre', 'Farine', 'Lait', 'Oignon', 'Ail', 'Tomate',
    'Fromage', 'Parmesan', 'Boeuf', 'Aubergine', 'Courgette', 'Poivron', 'Huile d\'Olive', 'Thym'];

  public mealList = [
    {
      id: 1,
      title: 'Poulet Teriyaki',
      url: 'https://media.houra.fr/images/widget/recette/gd_recette_salade_chevre_chaud.jpg',
      ingredients: [['200', 'g de poulet'], ['300', 'g de riz'], ['10', 'g de sucre'],
        ['4', 'ml de gingembre'], ['1', ' cuillière à soupe d\'huile de sésame'], ['1', ' cuillière à café de Sauce soja']],
      variantIngredients: [['200', 'g de poulet mariné'], ['300', 'g de riz'], ['10', 'g de miel'],
        ['4', 'ml de gingembre'], ['1', ' cuillière à soupe d\'huile de d\'olive'], ['1', ' cuillière à café de Sauce tabasco']],
      etapes: ['Mélangez le jus de gingembre avec la sauce de soja, et le sucre.', 'Ajoutez les morceaux de poulet à la sauce.', 'Couvrir et laissez reposer pendant 20 minutes.'],
      personNumber: 1,
      comments: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
      help: ['Faites attention à ne pas trop cuire le poulet et vous pouvez le découper à l\'aide de ciseaux']
    },
    {
      id: 2,
      title: 'Lasagnes',
      url: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.webp',
      ingredients: [['125', 'g de beurre'], ['100', 'g de farine'], ['1', 'L de lait'],
        ['1', 'kg de pâtes'], ['3', ' oignons jaune'], ['2', ' gousses d\'ail'], ['800', 'g de purée de tomate'],
        ['70', 'g de fromage râpé'], ['125', 'g de parmesan'], ['600', 'g de boeuf haché']],
      variantIngredients: [['125', 'g de margarine'], ['100', 'g de farine'], ['1', 'L de lait de chèvre'],
        ['1', 'kg de pâtes'], ['3', ' oignons jaune'], ['2', ' gousses d\'ail'], ['800', 'g de purée de tomate'],
        ['70', 'g de fromage râpé'], ['125', 'g de parmesan'], ['600', 'g de porc haché']],
      etapes: ['Faire revenir gousses hachées d\'ail et les oignons émincés dans un peu d\'huile d\'olive.',
        'Ajouter la purée de tomates, l\'eau et les herbes. Saler, poivrer, puis laisser mijoter à feu doux 45 minutes.',
        'Préparer la béchamel : faire fondre le beurre.',
        'Faire les lasagnes' ],
      personNumber: 1,
      comments: ['Mauvais : 1', 'Presque parfait: 4', 'J\'ai pas très bien aimé : 2'],
      help: ['Ayez bien en votre possession un four et mettez des gants lors de la dépose du récipient dans le four']
    },
    {
      id: 3,
      title: 'Ratatouille',
      url: 'https://www.papillesetpupilles.fr/wp-content/uploads/2015/08/Ratatouille-%C2%A9comeirrez-shutterstock.jpg',
      ingredients: [['350', 'g d\'aubergine'], ['300', 'g de courgette'], ['350', 'g de poivron rouge et vert'],
        ['350', 'g d\'oignon'], ['500', 'g de tomate'], ['3', ' gousses d\'ail'], ['6', ' cuillières à soupe d\'huile d\'olive'], ['1', ' brin de thym']],
      variantIngredients: [['350', 'g d\'aubergine'], ['300', 'g de courgette'], ['350', 'g de poivron jaune'],
        ['350', 'g d\'oignon'], ['500', 'g de tomate'], ['3', ' gousses d\'ail'], ['6', ' cuillières à soupe d\'huile d\'olive'], ['1', ' brin de thym']],
      etapes: ['Coupez les tomates pelées en quartiers, les aubergines et les courgettes en rondelles et l\'oignon en rouelles.',
        'Chauffez 2 cuillères à soupe d\'huile dans une poêle et faites-y fondre les oignons et les poivrons.',
        'Salez, poivrez et laissez mijoter doucement à couvert durant 45 minutes.',
        'Pendant ce temps, préparez les aubergines et les courgettes. Faites les cuire séparemment ou non dans l\'huile d\'olive pendant 15 minutes.'],
      personNumber: 1,
      comments: ['Bon : 3', 'Parfait : 5', 'Respectable : 4'],
      help: ['Ayez bien en votre possession une marmite et faite attention à ne pas vous brûler']
    }
  ];

}
