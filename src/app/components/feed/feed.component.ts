import { Component, NgModule } from '@angular/core';

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

