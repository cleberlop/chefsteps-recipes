import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces';

@Component({
  selector: 'recipe-image-component',
  templateUrl: 'recipe-image.component.html'
})
export class RecipeImageComponent {
  @Input() recipe: Recipe;
  constructor() {}
}
