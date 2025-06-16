import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thirdPipe'
})
export class ThirdPipePipe implements PipeTransform {
  transform(value: string): number {
    return value ? value.length : 0;
  }
}