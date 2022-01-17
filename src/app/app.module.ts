import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
