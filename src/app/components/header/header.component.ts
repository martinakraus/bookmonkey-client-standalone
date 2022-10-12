import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { DARK_MODE_SETTING } from '../../constants/local-storage-keys.const';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgForOf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    MatMenuModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    NgForOf,
    TranslateModule,
    MatToolbarModule,
    RouterLink,
  ],
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  toggleControl: FormControl<boolean>;
  @Output() changeTheme = new EventEmitter<boolean>();
  languages = [ 'de', 'en' ];
  languageInUse: string = this.translate.getBrowserLang() ?? this.translate.getDefaultLang();

  private isInDarkMode: boolean = this.localStorageService.get<boolean>(DARK_MODE_SETTING) ?? false;
  private destroy$ = new Subject<void>()

  constructor(private readonly localStorageService: LocalStorageService,
              private readonly translate: TranslateService) {
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
  }

  changeLanguage(language: string) {
    this.languageInUse = language;
    this.translate.use(language);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
