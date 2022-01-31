import {AccueilComponent} from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecetteComponent} from './recette/recette.component';
import {CartComponent} from './cart/cart.component';
import {EntreesComponent} from './entrees/entrees.component';
import {PlatsComponent} from './plats/plats.component';
import {DessertsComponent} from './desserts/desserts.component';
import {MenusComponent} from './menus/menus.component';
import {PouletTeriyakiComponent} from './pouletteriyaki/poulet-teriyaki.component';
import {LasagnesComponent} from './lasagnes/lasagnes.component';
import {RatatouilleComponent} from './ratatouille/ratatouille.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'poulet teriyaki', component: PouletTeriyakiComponent },
  { path: 'ratatouille', component: RatatouilleComponent },
  { path: 'lasagnes', component: LasagnesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'entrees', component: EntreesComponent},
  { path: 'plats', component: PlatsComponent},
  { path: 'desserts', component: DessertsComponent},
  { path: 'menus', component: MenusComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
