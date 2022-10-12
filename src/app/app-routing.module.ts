import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BASE, BOOKS, FEED } from './constants/routes.const';
import { FeedComponent } from './components/feed/feed.component';

const APP_ROUTES: Routes = [
    {
        path: BASE,
        redirectTo: `/${ FEED }`,
        pathMatch: 'full',
    },
    {
        path: FEED,
        component: FeedComponent,
    },
    {
        path: BOOKS,
        loadChildren: () => import('./features/book/book.module')
            .then(m => m.BookModule),
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules }) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
