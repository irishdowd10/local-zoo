import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe ({
  name: "maturity",
  pure: false
})

export class MaturityPipe implements PipeTransform {
  transform(input: Animal[], desiredMaturity) {
    var output: Animal[] = [];
    if (desiredMaturity === "animalsYoung") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].underTwo === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredMaturity === "animalsMature") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].underTwo === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
