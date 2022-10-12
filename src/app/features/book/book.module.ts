import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        BookRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        TranslateModule,
    ],
})
export class BookModule {
}
