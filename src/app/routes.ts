import { Routes } from '@angular/router';
import { BASE, BOOKS, FEED } from './constants/routes.const';
import { FeedComponent } from './components/feed/feed.component';

export const APP_ROUTES: Routes = [
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
        loadChildren: () => import('./features/book/routes')
            .then(m => m.BOOK_ROUTES),
    },
];
