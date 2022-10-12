import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';

const BOOK_ROUTES: Routes = [
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

@NgModule({
    imports: [ RouterModule.forChild(BOOK_ROUTES) ],
    exports: [ RouterModule ],
})
export class BookRoutingModule {
}
