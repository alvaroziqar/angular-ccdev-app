import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StorageService {
  defaultStorageName = '_ccd';

  setItem<T>(_key: string, _value: T): Observable<T> {
    const key = this.buildKey(_key);
    const value = JSON.stringify(_value);
    return of(localStorage.setItem(key, value)).pipe(map(() => _value));
  }

  getItem<T>(_key: string): Observable<T> {
    const key = this.buildKey(_key);
    return of(localStorage.getItem(key)).pipe(
      map((value: string | null) => {
        return JSON.parse(value);
      })
    );
  }

  removeItem(_key: string): Observable<void> {
    const key = this.buildKey(_key);
    return of(localStorage.removeItem(key));
  }

  clearAll() {
    return of(localStorage.clear());
  }

  private buildKey(key: string): string {
    return `${this.defaultStorageName}!${key}`;
  }
}
