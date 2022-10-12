import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookApiService } from '../services/book-api.service';
import { Book } from '../models/book';
import { Observable, switchMap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    standalone: true,
    imports: [ TranslateModule, CommonModule, MatButtonModule, RouterLink ],
    styleUrls: [ './book-detail.component.scss' ],
})
export class BookDetailComponent implements OnInit {
    book$!: Observable<Book>;

    constructor(private readonly route: ActivatedRoute,
                private readonly bookApiService: BookApiService) {
    }

    ngOnInit(): void {
        this.book$ = this.route.params.pipe(
            switchMap((params) => this.bookApiService.getByIsbn(params[ 'isbn' ])),
        );
    }
}
