import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firtsPipe'
})
export class FirtsPipePipe implements PipeTransform {

  transform(value: number): string {
    return `La suma de 10 + ${value} = ${10+value}`;
  }

}
