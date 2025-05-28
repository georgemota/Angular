import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'secondPipe'
})
export class SecondPipePipe implements PipeTransform {

  transform(value: string, all: boolean = false): string {
    if (!value) {
      return '';
    }

    if (all) {
      return value.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
    } else {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  }

}