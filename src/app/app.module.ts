import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './appRoutingModule';
import { RecetteComponent } from './recette/recette.component';
import { CartComponent } from './cart/cart.component';
import { EntreesComponent } from './entrees/entrees.component';
import { PlatsComponent } from './plats/plats.component';
import { DessertsComponent } from './desserts/desserts.component';
import { MenusComponent } from './menus/menus.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RecetteComponent,
    CartComponent,
    EntreesComponent,
    PlatsComponent,
    DessertsComponent,
    MenusComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
