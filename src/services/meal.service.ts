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

  getAllEntrees(): Meal[] {
    const entreesList = [];
    for (const meal of this.mealList)
    {
      if (meal.type == 'entree'){
        entreesList.push(meal);
      }
    }
    return entreesList;
}


  public ingredients = ['Poulet', 'Riz', 'Sucre', 'Gingembre', 'Huile de sésame', 'Soja', 'Pâtes', 'Beurre', 'Farine', 'Lait', 'Oignon', 'Ail', 'Tomate',
    'Fromage', 'Parmesan', 'Boeuf', 'Aubergine', 'Courgette', 'Poivron', 'Huile d\'Olive', 'Thym', 'Chèvre', 'Lardon', 'Burratas', 'Melons', 'Cognac', 'Carotte',
  'Champignon', 'Crème fraîche', 'Veau'];

  public mealList = [
    {
      id: 1,
      title: 'Poulet Teriyaki',
      url: ['https://www.lessecretsduchef.be/img/cms/poulet-teriyaki.jpg', 'https://static.750g.com/images/1200-630/1f45e5f01c3e5f023ec899ecaef89f03/img-0632.jpg'],
      ingredients: [['200', 'g de poulet'], ['300', 'g de riz'], ['10', 'g de sucre'],
        ['4', 'ml de gingembre'], ['1', ' cuillière à soupe d\'huile de sésame'], ['1', ' cuillière à café de Sauce soja']],
      variantIngredients: [['200', 'g de poulet mariné'], ['300', 'g de riz'], ['10', 'g de miel'],
        ['4', 'ml de gingembre'], ['1', ' cuillière à soupe d\'huile de d\'olive'], ['1', ' cuillière à café de Sauce tabasco']],
      etapes: ['Mélangez le jus de gingembre avec la sauce de soja, et le sucre.', 'Ajoutez les morceaux de poulet à la sauce.', 'Couvrir et laissez reposer pendant 20 minutes.'],
      personNumber: 1,
      comments: ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'],
      help: ['Faites attention à ne pas trop cuire le poulet et vous pouvez le découper à l\'aide de ciseaux'],
      type: 'plat',
      chaleur: true,
      prix: 5,
      duree: 30
    },
    {
      id: 2,
      title: 'Lasagnes',
      url: ['https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.webp', 'https://www.galbani.fr/wp-content/uploads/2017/07/shutterstock_142426168-800x600.jpg'],
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
      help: ['Ayez bien en votre possession un four et mettez des gants lors de la dépose du récipient dans le four'],
      type: 'plat',
      chaleur: true,
      prix: 4,
      duree: 30
    },
    {
      id: 3,
      title: 'Ratatouille',
      url: ['https://www.papillesetpupilles.fr/wp-content/uploads/2015/08/Ratatouille-%C2%A9comeirrez-shutterstock.jpg', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/30/1501008062-shot-2-099.jpg'],
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
      help: ['Ayez bien en votre possession une marmite et faite attention à ne pas vous brûler'],
      type: 'plat',
      chaleur: true,
      prix: 3,
      duree: 70
    },
    {
      id: 4,
      title: 'Salade de chèvre chaud',
      url: ['https://media.houra.fr/images/widget/recette/gd_recette_salade_chevre_chaud.jpg', 'https://cdn.pratico-pratiques.com/app/uploads/sites/4/2018/08/30183057/salade-de-chevre-chaud.jpeg'],
      ingredients: [['100', 'g de lardon'], ['2', ' tomates'], ['1', ' gousse d\'ail'],
        ['20', 'g d\'huile d\'olive'], ['5', 'g de basilic'], ['4', ' tranches de pain de campagne'], ['2', ' pélardons (fromage de chèvre AOC)']
        , ['1', ' laitue']],
      variantIngredients: [['100', 'g de lardons'], ['2', ' tomates'], ['1', ' gousse d\'ail'],
        ['20', 'g d\'huile d\'olive'], ['5', 'g de persil'], ['4', ' tranches de pain de seigle'], ['2', ' chèvre']
        , ['1', ' mâche']],
      etapes: ['Frotter les quatres tranches de pain de campagne avec la gousse d\'ail. Couper les pélardons en deux dans la largeur. Poser sur chaque tranche de pain une moitié de pélardon.',
        // tslint:disable-next-line:max-line-length
        'Mettez-les sur la plaque de votre four avec du papier cuisson puis arrosez-les d\'huile d\'olive et de basilic. Faire cuire 15 mn.',
        'Pendant ce temps, laver la salade et installer deux ou trois feuilles dans chaque assiette. Laver les tomates, coupez-les en deux et trancher chaque moitié en fines tranches. Posez-les sur la salade.',
        'Faire cuire les lardons à votre convenance sans ajouter de matière grasse. Disperser les sur la salade.',
        'Couper huit lamelles de poivron et faire cuire dans de l\'huile d\'olive à feu très doux jusqu\'à ce que le poivron soit fondant. Déposer quatre lamelles de poivron par assiette.',
        'Faire la sauce pour la salade et déposer les toasts de chèvre chaud sur la présentation. Saupoudrer de basilic ciselé.'],
      personNumber: 1,
      comments: ['Bon : 3', 'Parfait : 5', 'Respectable : 4'],
      help: ['Préchauffer votre four pour une cuisson plus propre'],
      type: 'entree',
      chaleur: false,
      prix: 2,
      duree: 20
    },
    {
      id: 5,
      title: 'Carpaccio melon mozza jambon cru',
      url: ['https://assets.afcdn.com/recipe/20150716/62915_w768h583c1cx274cy182cxb549cyb365.webp', 'https://assets.afcdn.com/recipe/20150813/56828_w1024h1024c1cx270cy480.jpg'],
      ingredients: [['20', 'cl de muscat'], ['2', ' melons mûrs à point'], ['2', ' boules de mozzarella'],
        ['6', ' tranches de jambon cru'], ['3', ' brins de menthe']],
      variantIngredients: [['20', 'cl de cognac'], ['2', ' melons mûrs à point'], ['2', ' burratas'],
        ['6', ' tranches de jambon cru'], ['3', 'brins de cerfeuil']],
      etapes: ['Couper les melons en 2, les éplucher et les épépiner.',
        // tslint:disable-next-line:max-line-length
        'Découper de fines lamelles et le mettre dans un saladier avec le muscat et la menthe ciselée.',
        'Filmer le saladier et mettre au frais.',
        'Découper de fines tranches de mozzarella et de fines lamelles de jambon cru.',
        'Dresser les assiettes en intercalant, une lamelle de melon, une lamelle de mozzarella, une lamelle de jambon et renouveler jusqu\'à épuisement des ingrédients.',
        'Ajouter quelques cuillères de la marinade du melon sur les assiettes, quelques tours de moulin à poivre et servir.'],
      personNumber: 1,
      comments: ['Bon : 3', 'Parfait : 5', 'Respectable : 4'],
      help: ['Utiliser un bon couteau et n\'abusez pas de la menthe'],
      type: 'entree',
      chaleur: true,
      prix: 3,
      duree: 20
    },
    {
      id: 6,
      title: 'Blanquette de veau',
      url: ['https://assets.afcdn.com/recipe/20190529/93191_w1200h800c1cx4330cy2886cxb8660cyb5773.webp', 'https://assets.afcdn.com/recipe/20131223/2265_w768h576c1cx256cy192cxb512cyb384.webp'],
      ingredients: [['1', ' cube de bouillon de légumes'], ['2', ' carotte'], ['1', ' oignon jaune'],
        ['50', 'g de champignon'], ['25', 'cl de crème fraîche'], ['200', 'g de farine'], ['1', 'kg de blanquette de veau']],
      variantIngredients: [['1', ' cube de poule'], ['2', ' carotte'], ['1', ' oignon jaune'],
        ['50', 'g de champignon'], ['25', 'cl de crème fraîche'], ['1', ' citron'], ['200', 'g de farine'], ['1', 'kg de blanquette de veau']],
      etapes: ['Faire revenir la viande dans un peu de beurre doux jusqu\'à ce que les morceaux soient un peu dorés.',
        // tslint:disable-next-line:max-line-length
        'Saupoudrer de 2 cuillères de farine. Bien remuer.',
        'Ajouter 2 ou 3 verres d\'eau, les cubes de bouillon, le vin et remuer. Ajouter de l\'eau si nécessaire pour couvrir.',
        'Couper les carottes en rondelles et émincer les oignons puis les incorporer à la viande, ainsi que les champignons.',
        'Laisser mijoter à feu très doux environ 1h30 à 2h00 en remuant.',
        'Si nécessaire, ajouter de l\'eau de temps en temps.',
        'Dans un bol, bien mélanger la crème fraîche, le jaune d’oeuf et le jus de citron. Ajouter ce mélange au dernier moment, bien remuer et servir tout de suite.'],
      personNumber: 1,
      comments: ['Bon : 3', 'Bon : 3', 'Bon : 3'],
      help: ['Préparez du temps devant vous (2h15)'],
      type: 'plat',
      chaleur: true,
      prix: 10,
      duree: 130
    }
  ];

}
