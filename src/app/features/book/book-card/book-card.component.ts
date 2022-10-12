import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared.module';
import { Book } from '../models/book';

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
  declarations: [BookCardComponent],
  imports: [SharedModule, CommonModule, MatButtonModule],
})
export class BookCardComponentModule {

}