import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        RouterOutlet,
        HeaderComponent,
    ],
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
    private readonly darkModeClassName = 'darkMode';
    @HostBinding('class') private className = '';

    changeTheme(isInDarkMode: boolean) {
        this.className = isInDarkMode ? this.darkModeClassName : '';
    }
}
