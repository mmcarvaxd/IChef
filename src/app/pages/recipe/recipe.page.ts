import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/classes/Recipe';
import { RecipeResponse } from 'src/app/classes/RecipeResponse';
import { RecipeHttpService } from '../../services/http/recipe-http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'recipe.page.html',
  styleUrls: ['recipe.page.scss'],
})
export class Tab1Page implements OnInit {
  recipes: RecipeResponse = new RecipeResponse();
  constructor(private recipeHttpService: RecipeHttpService, private router: Router) {}

  ngOnInit(): void {
    this.getRecipes('nigiri');
  }

  getRecipes(query: string) {
    this.recipeHttpService
      .getRecipe(query)
      .then((resp) => {
        this.recipes = resp;
      })
      .catch((err) => {});
  }

  searchChanged(event) {
    this.getRecipes(event.detail.value || 'nigiri');
  }

  clickRecipe(recipe: Recipe) {
    localStorage.setItem("recipe", JSON.stringify(recipe))
    this.router.navigate(['recipe-ingredients'])
  }
}
