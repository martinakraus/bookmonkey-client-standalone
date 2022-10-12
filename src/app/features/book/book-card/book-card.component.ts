import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../models/book';
import { PrefixPipe } from '../pipes/prefix.pipe';

@Component({
    selector: 'app-book-card',
    templateUrl: './book-card.component.html',
    standalone: true,
    imports: [ CommonModule, MatButtonModule, PrefixPipe ],
    styleUrls: [ './book-card.component.scss' ],
})
export class BookCardComponent {
    @Input() content!: Book;
    @Output() detailClick = new EventEmitter<Book>();

    handleDetailClick() {
        this.detailClick.emit(this.content);
    }
}
