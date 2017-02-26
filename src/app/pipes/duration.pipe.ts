import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
    if (!value) return value;

    let hours = value / 60 >> 0;
    let min = value - hours * 60;

    if(hours > 0){
      return `${hours}h ${min}min`;
    }else{
      return `${min}min`;
    }
  }
}
