import { Component, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
<h3> New Animal </h3>
<div>
  <h4>Enter Animal Information</h4>
  <form>
    <label>Species</label>
    <input required #newSpecies>
    <label>Name</label>
    <input required #newName>
    <label>Age</label>
    <input required type="number" #newAge>
    <label>Diet</label>
    <input required #newDiet>
    <label>Location</label>
    <input required #newLocation>
    <label>Caretakers</label>
    <input required type="number" #newCaretakers>
    <label>Sex</label>
    <input required #newSex>
    <label>Likes</label>
    <input required #newLikes>
    <label>Dislikes</label>
    <input required #newDislikes>
  </form>
</div>
<div>
 <button type="submit" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value,newLocation.value,newCaretakers.value,newSex.value,newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value='';newLocation.value='';newCaretakers.value='';newSex.value='';newLikes.value='';newDislikes.value ='';">Add</button>
</div>
`
})


export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string,location: string,  caretakers: number, sex: string, likes: string, dislikes: string){
    console.log(age);
    if(species != '' &&
    name != '' &&
    age.toString() != '' &&
    diet != '' &&
    location !='' && caretakers.toString() != '' && sex != '' && likes != '' &&  dislikes != '') {
      var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }
}
