import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeResponse } from 'src/app/classes/RecipeResponse';

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {
  app_id = '6a4e6dca'
  app_key = '8963e6ef238a1e607304271f96de5870'
  constructor(private http: HttpClient) { }

  getRecipe(query: string): Promise<RecipeResponse> {
    return this.http.get<RecipeResponse>('https://api.edamam.com/search', {
      params: {
        'q': query,
        app_id: this.app_id,
        app_key: this.app_key,
        from: '0',
        to: '20'
      }
    }).toPromise()
  }
}
