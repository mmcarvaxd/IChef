import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'recipe-ingredients',
    loadChildren: () => import('./pages/recipe-ingredients/recipe-ingredients.module').then( m => m.RecipeIngredientsPageModule)
  },
  {
    path: 'drink-ingredients',
    loadChildren: () => import('./pages/drink-ingredients/drink-ingredients.module').then( m => m.DrinkIngredientsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
