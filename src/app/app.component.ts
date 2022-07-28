import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  private readonly darkModeClassName = 'darkMode';
  @HostBinding('class') private className = '';

  changeTheme(isInDarkMode: boolean) {
    this.className = isInDarkMode ? this.darkModeClassName : '';
  }
}
