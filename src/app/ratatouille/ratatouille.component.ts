import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette',
  templateUrl: './ratatouille.component.html',
  styleUrls: ['./ratatouille.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class RatatouilleComponent implements OnInit {

  constructor() { }

  public etapes = ['Mélangez le jus de gingembre avec la sauce de soja, et le sucre.', 'Ajoutez les morceaux de poulet à la sauce.', 'Couvrir et laissez reposer pendant 20 minutes.'];
  public ingredients = ['Poulet', 'Riz', 'Sucre', 'Gingembre', 'Huile de sésame', 'Sauce soja'];
  public notes = ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'];
  ngOnInit(): void {
  }

}
