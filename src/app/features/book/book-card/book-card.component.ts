import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../models/book';
import { PrefixPipeModule } from '../pipes/prefix.pipe';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: [ './book-card.component.scss' ],
})
export class BookCardComponent {
  @Input() content!: Book;
  @Output() detailClick = new EventEmitter<Book>();

  handleDetailClick() {
    this.detailClick.emit(this.content);
  }
}
@NgModule({
    declarations: [ BookCardComponent ],
    imports: [ CommonModule, MatButtonModule, PrefixPipeModule ],
    exports: [
        BookCardComponent,
    ],
})
export class BookCardComponentModule {

}
