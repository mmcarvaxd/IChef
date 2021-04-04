import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkIngredientsPageRoutingModule } from './drink-ingredients-routing.module';

import { DrinkIngredientsPage } from './drink-ingredients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkIngredientsPageRoutingModule
  ],
  declarations: [DrinkIngredientsPage]
})
export class DrinkIngredientsPageModule {}
