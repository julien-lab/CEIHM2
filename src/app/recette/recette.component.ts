import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css'],
})
export class RecetteComponent implements OnInit {

  constructor(private route: Router) { }

  public etapes = ['Mélangez le jus de gingembre avec la sauce de soja, et le sucre.', 'Ajoutez les morceaux de poulet à la sauce.', 'Couvrir et laissez reposer pendant 20 minutes.'];
  public ingredients = ['Poulet', 'Riz', 'Sucre', 'Gingembre', 'Huile de sésame', 'Sauce soja'];
  public notes = ['Très bon : 4', 'Excellent : 5', 'J\'ai bien aimé : 3'];


  ngOnInit(): void {
  }

  public addToCart(): void{
    this.route.navigate(['/cart'], { preserveFragment: true });
  }

}
