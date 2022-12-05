import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { TranslateModule } from '@ngx-translate/core';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookNewComponent } from './book-new/book-new.component';
import { SharedModule } from '../../shared.module';


@NgModule({
    declarations: [
        BookComponent,
        BookDetailComponent,
        BookCardComponent,
        BookNewComponent,
    ],
    imports: [
        CommonModule,
        BookRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        TranslateModule,
        SharedModule,
    ],
})
export class BookModule {
}
