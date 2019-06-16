import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe [] = [
    new Recipe("Chicken","Fat chicken","https://www.gimmesomeoven.com/wp-content/uploads/2009/12/garlic-roasted-chicken2.jpg"),
    new Recipe("Chicken","Fat chicken","https://www.gimmesomeoven.com/wp-content/uploads/2009/12/garlic-roasted-chicken2.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
