import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from 'src/app/classes/Drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkHttpService {

  constructor(private http: HttpClient) { }

  getDrinks(): Promise<{drinks: [Drink]}> {
    return this.http.get<{drinks: [Drink]}>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').toPromise()
  }

  getDrinksQuery(query: string): Promise<{drinks: [Drink]}> {
    return this.http.get<{drinks: [Drink]}>('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        s: query
      }
    }).toPromise()
  }
}
