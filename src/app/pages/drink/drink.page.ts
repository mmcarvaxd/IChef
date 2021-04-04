import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from 'src/app/classes/Drink';
import { DrinkHttpService } from 'src/app/services/http/drink-http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'drink.page.html',
  styleUrls: ['drink.page.scss']
})
export class Tab2Page implements OnInit {
  drinks: [Drink]

  constructor(private drinkHttpService: DrinkHttpService, private router: Router) {}

  ngOnInit(): void {
    this.drinkHttpService.getDrinks().then(resp => {
      this.drinks = resp.drinks
    })
  }

  getDrinksQuery(query: string) {
    return this.drinkHttpService.getDrinksQuery(query).then(resp => {
      this.drinks = resp.drinks
    })
  }

  getDrinksDefault() {
    return this.drinkHttpService.getDrinks().then(resp => {
      this.drinks = resp.drinks
    })
  }

  drinkClick(drink: Drink) {
    localStorage.setItem("drink", JSON.stringify(drink))
    this.router.navigate(['drink-ingredients'])
  }

  searchChanged(event) {
    if(event.detail.value) {
      
      return this.getDrinksQuery(event.detail.value)
    }

    return this.getDrinksDefault()
  }
}
