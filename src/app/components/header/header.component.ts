import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DARK_MODE_SETTING } from '../../constants/local-storage-keys.const';
import { LocalStorageService } from '../../services/local-storage.service';
import { firstValueFrom, Observable, Subject, takeUntil, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  toggleControl: FormControl<boolean>;
  @Output() changeTheme = new EventEmitter<boolean>();
  languages = [ 'de', 'en' ];
  languageInUse: string = this.translate.getBrowserLang() ?? this.translate.getDefaultLang();
  user$: Observable<any> = this.auth.user$;

  private isInDarkMode: boolean = this.localStorageService.get<boolean>(DARK_MODE_SETTING) ?? false;
  private destroy$ = new Subject<void>()

  constructor(private readonly localStorageService: LocalStorageService,
              private readonly translate: TranslateService,
              public readonly auth: AuthService) {
    this.toggleControl = new FormControl<boolean>(this.isInDarkMode, { nonNullable: true });
  }

  ngOnInit(): void {
    this.changeTheme.emit(this.isInDarkMode);

    this.toggleControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      tap(darkMode => this.localStorageService.set<boolean>(DARK_MODE_SETTING, darkMode)),
    ).subscribe((darkMode) => {
      this.changeTheme.emit(darkMode);
    });

    firstValueFrom(this.user$).then((user: User) => {
      this.languageInUse = user.locale ?? this.translate.getBrowserLang() ?? this.translate.getDefaultLang();
      this.translate.use(this.languageInUse)
    })
  }

  changeLanguage(language: string) {
    this.languageInUse = language;
    this.translate.use(language);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
