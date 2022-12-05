import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponentModule } from './book/book.component';
import { BookDetailComponentModule } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { BookNewComponentModule } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        BookRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        TranslateModule,
        BookDetailComponentModule,
        BookNewComponentModule,
        BookComponentModule,
    ],
})
export class BookModule {
}
