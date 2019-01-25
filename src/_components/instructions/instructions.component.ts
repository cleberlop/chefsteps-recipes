import { Component } from '@angular/core';

@Component({
  selector: 'instructions-component',
  templateUrl: 'instructions.component.html'
})
export class InstructionsComponent {
  public readInstructions: boolean;
  constructor() {}

  ngOnInit() {
    this.readInstructions = JSON.parse(localStorage.getItem('readInstructions')) || false;
  }

  setReadInstructions(): void {
    this.readInstructions = true;
    localStorage.setItem('readInstructions', JSON.stringify(true));
  }
}
