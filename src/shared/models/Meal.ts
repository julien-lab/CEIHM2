export class Meal {
  id!: number;
  title!: string;
  url!: string[];
  ingredients!: string[][];
  variantIngredients!: string[][];
  etapes!: string[];
  personNumber: number;
  comments: string[];
  help: string[];
  type: string;
  chaleur: boolean;
  prix: number;
  duree: number
  /*price!:number;
  tags?:string[];
  favorite:boolean = false;
  stars:number = 0;
  imageUrl!:string;
  origins!:string[];
  cookTime!:string;*/
}
