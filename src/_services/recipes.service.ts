import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RecipesService {
  constructor(private http: Http) {}

  //I chose to store the data locally as JSON to represent something similar to getting data from an external API.
  //This will also filter the data in case it's favorites only
  getRecipes(favoritesOnly = false): Observable<Recipe[]> {
    return this.http.get('assets/data/data.json').map((response: Response) => {
      const json = response.json();
      if (json && json.data) {
        if (favoritesOnly) {
          const liked = JSON.parse(localStorage.getItem('likes')) || {};
          return json.data.filter((recipe: Recipe) => {
            return liked.hasOwnProperty(recipe.id);
          });
        } else {
          return json.data;
        }
      } else {
        Observable.throw({ message: 'Internal Server Error' });
      }
    });
  }
}
