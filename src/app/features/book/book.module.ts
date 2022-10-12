import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book/book.component';
import { BookCardComponent, BookCardComponentModule } from './book-card/book-card.component';
import { BookDetailComponent, BookDetailComponentModule } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { BookNewComponent, BookNewComponentModule } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    TranslateModule,
    BookDetailComponentModule,
    BookNewComponentModule,
    BookCardComponentModule,
    SharedModule
  ],
  exports: [
    BookComponent,
  ],
})
export class BookModule {
}
