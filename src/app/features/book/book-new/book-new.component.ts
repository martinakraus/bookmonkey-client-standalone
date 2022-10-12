import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BookApiService } from '../services/book-api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-book-new',
    standalone: true,
    templateUrl: './book-new.component.html',
    imports: [ ReactiveFormsModule, CommonModule ],
    styleUrls: [ './book-new.component.scss' ],
})
export class BookNewComponent {
    newForm = this.buildForm();

    constructor(private readonly form: FormBuilder, private readonly bookApiService: BookApiService, private readonly router: Router) {
    }

    create() {
        const book: Partial<Book> = this.newForm.getRawValue();

        this.bookApiService.create(book).subscribe(() => this.router.navigate([ '/books' ]));
    }

    get title(): AbstractControl<string> {
        return this.newForm.get('title') as AbstractControl<string>;
    }

    get isbn(): AbstractControl<string> {
        return this.newForm.get('isbn') as AbstractControl<string>;
    }

    private buildForm() {
        return this.form.nonNullable.group({
            isbn: [ '', [ Validators.required ] ],
            title: [ '', [ Validators.required ] ],
            author: [ '' ],
            abstract: [ '' ],
        });
    }
}
