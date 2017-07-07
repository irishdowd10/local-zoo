import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="filterByAgeSelected($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="animalsYoung">Animals Young Under 2</option>
      <option value="animalsMature">Animals Mature 2 and Older </option>
    </select>
    <ul>
      <li [class]="priorityColor(currentAnimal)" *ngFor="let currentAnimal of (childAnimalList | maturity:currentSelectedAge)">{{currentAnimal.species}} | {{currentAnimal.name}} | {{currentAnimal.diet}} | {{currentAnimal.location}} | {{currentAnimal.caretakers}} | {{currentAnimal.sex}} | {{currentAnimal.likes}} | {{currentAnimal.dislikes}} <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  currentSelectedAge = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  priorityColor(currentAnimal) {
    if (currentAnimal.age < 2) {
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }


  onChange(optionFromMenu) {
    // this.filterByMaturity = optionFromMenu;
  }

  filterByAgeSelected(selectedAge) {
    this.currentSelectedAge = selectedAge;
    // this.desiredMaturity = selectedAge <- passed into pipe
    // clickedCourse.haveRun = Status;
  }

}
