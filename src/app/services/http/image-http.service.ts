import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHttpService {

  constructor(private http: HttpClient) { }

  getImage(): Promise<{image: string}> {
    return this.http.get<{image: string}>('https://foodish-api.herokuapp.com/api/').toPromise()
  }
}
