import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './components/login/login.component';
import { ProfileCardComponent } from './components/login/profile-card/profile-card.component';
import { FeedComponent } from './components/feed/feed.component';
import { WebcamModule } from 'ngx-webcam';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './components/header/header.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileCardComponent,
    FeedComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [ HttpClient ],
        },
        defaultLanguage: 'en',
      },
    ),
    AuthModule.forRoot({
      domain: 'dev-codekittey.eu.auth0.com',
      clientId: 'mgVfWdDSwcKkd3mC7O7Wn0vMNvKxcqiA',
    }),
  ],
  providers: [ {
    provide: Window,
    useValue: window,
  } ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
