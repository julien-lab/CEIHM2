import {AccueilComponent} from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecetteComponent} from './recette/recette.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'recette', component: RecetteComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
