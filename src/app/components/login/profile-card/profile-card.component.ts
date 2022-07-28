import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: [ './profile-card.component.scss' ],
})
export class ProfileCardComponent {
  @Input() user!: User;
  @Output() logoutClick: EventEmitter<null> = new EventEmitter<null>();

  logout() {
    this.logoutClick.emit();
  }
}
