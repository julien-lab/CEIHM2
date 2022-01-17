import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './appRoutingModule';
import { RecetteComponent } from './recette/recette.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RecetteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule

  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
