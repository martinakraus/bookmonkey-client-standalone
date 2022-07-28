import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item) ?? '');
  }

  get<T>(key: string): T {
    const item = localStorage.getItem(key) ?? '{}';
    return JSON.parse(item);
  }

  remove<T>(key: string): void {
    localStorage.removeItem(key);
  }
}
