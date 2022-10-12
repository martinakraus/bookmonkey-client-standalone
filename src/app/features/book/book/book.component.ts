import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    standalone: true,
    imports: [ BookCardComponent, CommonModule ],
    styleUrls: [ './book.component.scss' ],
})
export class BookComponent implements OnInit {
    books$!: Observable<Book[]>;
    subscription!: Subscription;

    constructor(private readonly bookApiService: BookApiService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
        this.books$ = this.bookApiService.getAll();
    }

    navigateToDetail(book: Book) {
        this.router.navigate([ '/books', book.isbn ]);
    }
}
