import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {PreloadAllModules, provideRouter, RouterModule, withPreloading} from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

if ( environment.production ) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
        importProvidersFrom(TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ HttpClient ],
            },
            defaultLanguage: 'en',
        })),
        provideHttpClient(),
        {
            provide: Window,
            useValue: window,
        },
        importProvidersFrom(BrowserAnimationsModule),
    ],
})
