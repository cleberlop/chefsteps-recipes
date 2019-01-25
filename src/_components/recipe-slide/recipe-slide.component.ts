import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../interfaces';

@Component({
  selector: 'recipe-slide-component',
  templateUrl: 'recipe-slide.component.html'
})
export class RecipeSlideComponent {
  @Input() recipe: Recipe;
  @Input() likeStatus: boolean;
  @Output() like = new EventEmitter();
  constructor() {}

  emitLike(): void {
    this.like.emit();
  }
}
