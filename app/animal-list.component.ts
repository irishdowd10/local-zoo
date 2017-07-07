import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select>
      <option value="allAnimals">All Animals</option>
      <option value="animalsYoung">Animals Young Under 2</option>
      <option value="animalsMature">Animals Mature 2 and Older </option>
    </select>
    <ul>
      <li [class]="priorityColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}} | {{currentAnimal.name}} | {{currentAnimal.diet}} | {{currentAnimal.diet}} | {{currentAnimal.location}} | {{currentAnimal.caretakers}} | {{currentAnimal.sex}} | {{currentAnimal.likes}} | {{currentAnimal.dislikes}} <button (click)="editButtonhasBeenClicked(currentAnimal)">Edit</button></li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];


  priorityColor(currentAnimal) {
    if (currentAnimal.age === 1) {
      return "bg-danger";
    } else {
      return "bg-warning";
    }
  }

}
