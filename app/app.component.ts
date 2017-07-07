
import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Local Zoo Animals for {{month}}/{{day}}/{{year}}</h1>
  <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  <hr>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  masterAnimlaList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore","Northern Trail", 5, "Female","Cool shade","Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore","Tropical Rainforest Building",6, "Male", "Laying in the sunshine","Toys that are not rope-based"),
    new Animal("Northern Black Tailed Deer", "Tinkerbell", 8,"Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises")
  ];

}