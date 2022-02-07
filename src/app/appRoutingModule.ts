import {AccueilComponent} from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {CartComponent} from './cart/cart.component';
import {EntreesComponent} from './entrees/entrees.component';
import {PlatsComponent} from './plats/plats.component';
import {DessertsComponent} from './desserts/desserts.component';
import {MenusComponent} from './menus/menus.component';
import {MealComponent} from './meal-page/meal.component';
import {MealPossiblityComponent} from './meal-possiblity/meal-possiblity.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'meal-page/:id', component: MealComponent },
  { path: 'cart', component: CartComponent },
  { path: 'entrees', component: EntreesComponent},
  { path: 'plats', component: PlatsComponent},
  { path: 'desserts', component: DessertsComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'meal-possibility', component: MealPossiblityComponent},

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
