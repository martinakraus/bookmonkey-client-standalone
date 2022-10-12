import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../models/types';

@Pipe({
  name: 'prefix',
  standalone: true
})
export class PrefixPipe implements PipeTransform {

  transform(author: string, gender: Gender | undefined): unknown {
    switch (gender) {
      case 'male':
        return `Herr ${author}`
      case 'female':
        return `Frau ${author}`
      default:
        return author;
    }
  }
}
