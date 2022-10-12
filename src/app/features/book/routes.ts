import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';

export const BOOK_ROUTES: Routes = [
    {
        path: '',
        component: BookComponent,
    },
    {
        path: 'new',
        component: BookNewComponent,
    },
    {
        path: ':isbn',
        component: BookDetailComponent,
    },
]
