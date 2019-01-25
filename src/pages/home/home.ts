import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesPage } from '../recipes/recipes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public recipesPage: any;

  constructor(public navCtrl: NavController) {
    this.recipesPage = RecipesPage;
  }

  goToPage(page, favs = false): void {
    this.navCtrl.push(page, { favoritesOnly: favs }, { duration: 1 });
  }
}
