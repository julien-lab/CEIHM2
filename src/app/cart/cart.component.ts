import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  message = false;

  constructor(private router: Router) {
    if (router.getCurrentNavigation().extras.preserveFragment !== undefined) {
      this.message = this.router.getCurrentNavigation().extras.preserveFragment.valueOf();
    }
  }

  ngOnInit(): void {
  }

}
