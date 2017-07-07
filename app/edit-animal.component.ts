import { Component, Input,Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <h3>{{childSelectedAnimal.done}}</h3>
      <h4>Edit Animal</h4>
      <label>Animal Name</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Animal Age </label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Animal Caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
      `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
