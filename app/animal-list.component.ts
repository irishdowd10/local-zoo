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
    <br><br>

  <table id="table">
    <tr>
      <th>Species</th>
      <th>Name</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th>Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
      <th>Edit</th>
    </tr>

      <tr [class]="priorityColor(currentAnimal)" *ngFor="let currentAnimal of (childAnimalList | maturity:currentSelectedAge)">
      <td>{{currentAnimal.species}}</td>
      <td>{{currentAnimal.name}}</td>
      <td>{{currentAnimal.age}}</td>
      <td>{{currentAnimal.diet}}</td>
      <td>{{currentAnimal.location}}</td>
      <td>{{currentAnimal.caretakers}}</td>
      <td>{{currentAnimal.sex}}</td>
      <td>{{currentAnimal.likes}}</td>
      <td>{{currentAnimal.dislikes}}</td>
      <td><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button></td>
    </table>
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


  filterByAgeSelected(selectedAge) {
    this.currentSelectedAge = selectedAge;
}
}
