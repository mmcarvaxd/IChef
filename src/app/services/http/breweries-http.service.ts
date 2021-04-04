import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breweries } from 'src/app/classes/Breweries';

@Injectable({
  providedIn: 'root'
})
export class BreweriesHttpService {

  constructor(private http: HttpClient) { }

  getBreweries(query: string): Promise<[Breweries]> {
    return this.http.get<[Breweries]>('https://api.openbrewerydb.org/breweries', {
      params: {
        by_city: query
      }
    }).toPromise()
  }
}
