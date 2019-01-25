import { Component, Input } from '@angular/core';
import { Ingredient } from '../../interfaces';

@Component({
  selector: 'recipe-ingredient-component',
  templateUrl: 'recipe-ingredient.component.html'
})
export class RecipeIngredientComponent {
  @Input() ingredient: Ingredient;
  constructor() {}
}
