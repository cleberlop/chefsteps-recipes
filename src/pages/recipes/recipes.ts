import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesService } from '../../_services/recipes.service';
import { Recipe } from '../../interfaces';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  public recipes: Array<Recipe> = null;
  public placeholderImg = '/assets/imgs/logo.png';
  public likes = {};
  public favoritesOnly: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public recipesService: RecipesService) {}

  ionViewDidLoad(): void {
    this.likes = JSON.parse(localStorage.getItem('likes')) || {};
    this.favoritesOnly = this.navParams.get('favoritesOnly');
    this.loadData();
  }

  loadData(): void {
    this.recipesService.getRecipes(this.favoritesOnly).subscribe((data: Array<Recipe>) => {
      this.recipes = data;
    });
  }

  like(id: string): void {
    if (this.likes.hasOwnProperty(id)) {
      delete this.likes[id];
    } else {
      this.likes[id] = id;
    }
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }
}
