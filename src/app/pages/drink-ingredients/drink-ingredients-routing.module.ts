import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkIngredientsPage } from './drink-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkIngredientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkIngredientsPageRoutingModule {}
