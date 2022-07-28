import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BASE, CREATE, FEED } from './constants/routes.const';
import { FeedComponent } from './components/feed/feed.component';
import { CreateComponent } from './components/create/create.component';

const APP_ROUTES: Routes = [
  {
    path: BASE,
    redirectTo: `/${FEED}`,
    pathMatch: 'full',
  },
  {
    path: FEED,
    component: FeedComponent,
  },
  {
    path: CREATE,
    component: CreateComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
