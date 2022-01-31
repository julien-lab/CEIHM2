import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {

  enable = false;

  constructor() { }

  ngOnInit(): void {
  }

}
