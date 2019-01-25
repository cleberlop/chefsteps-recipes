import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like-button-component',
  templateUrl: 'like-button.component.html'
})
export class LikeButtonComponent {
  @Input() likeStatus: boolean;
  @Output() like = new EventEmitter();
  constructor() {}

  emitLike(): void {
    this.like.emit();
  }
}
