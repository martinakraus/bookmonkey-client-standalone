import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../models/types';
import { BookCardComponentModule } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';

@Pipe({
  name: 'prefix'
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
@NgModule({
  declarations: [PrefixPipe],
  exports: [PrefixPipe]
})
export class PrefixPipeModule {

}
