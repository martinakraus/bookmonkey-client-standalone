import { Component, NgModule, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BookDetailComponent } from '../../features/book/book-detail/book-detail.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

}
@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class FeedComponentModule {

}

