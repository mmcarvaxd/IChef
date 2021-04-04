import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/classes/Drink';

@Component({
  selector: 'app-drink-ingredients',
  templateUrl: './drink-ingredients.page.html',
  styleUrls: ['./drink-ingredients.page.scss'],
})
export class DrinkIngredientsPage implements OnInit {
  drink: Drink = new Drink()
  constructor() { }

  ngOnInit() {
    this.drink = JSON.parse(localStorage.getItem("drink"))
    console.log(this.drink)
  }

}
