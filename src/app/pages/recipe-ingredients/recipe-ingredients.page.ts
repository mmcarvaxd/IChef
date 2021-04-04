import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/classes/Recipe';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.page.html',
  styleUrls: ['./recipe-ingredients.page.scss'],
})
export class RecipeIngredientsPage implements OnInit {
  recipe: Recipe = new Recipe()
  constructor() { }

  ngOnInit() {
    this.recipe = JSON.parse(localStorage.getItem("recipe")) || this.recipe
    console.log(this.recipe)
  }

}
