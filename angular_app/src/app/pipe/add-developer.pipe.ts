import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDeveloper',
  standalone: true
})
export class AddDeveloperPipe implements PipeTransform {

  transform(value : string , addDeveloperText : string): string {
    if (value == null)return value;
    return value + addDeveloperText;
  }

}
