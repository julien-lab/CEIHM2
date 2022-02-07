import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './appRoutingModule';
import { CartComponent } from './cart/cart.component';
import { EntreesComponent } from './entrees/entrees.component';
import { PlatsComponent } from './plats/plats.component';
import { DessertsComponent } from './desserts/desserts.component';
import { MenusComponent } from './menus/menus.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import { MealComponent } from './meal-page/meal.component';
import {MealPossiblityComponent} from './meal-possiblity/meal-possiblity.component';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CartComponent,
    EntreesComponent,
    PlatsComponent,
    DessertsComponent,
    MenusComponent,
    SearchComponent,
    MealComponent,
    MealPossiblityComponent,
    AddedToCartDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
