import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingreds.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient("Beef", 5),
    new Ingredient("Tomatoes", 15)
  ];
  


  constructor() { }

  ngOnInit() {
  }

}
