import { Component, Input } from '@angular/core';
import { Step } from '../../interfaces';

@Component({
  selector: 'recipe-step-component',
  templateUrl: 'recipe-step.component.html'
})
export class RecipeStepComponent {
  @Input() step: Step;
  @Input() position: number;
  constructor() {}
}
