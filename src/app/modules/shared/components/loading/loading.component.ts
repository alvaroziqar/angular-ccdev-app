import { Component, OnInit } from '@angular/core';
import { Store } from '@core/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ccd-loading',
  template: `
    <div *ngIf="isLoading$ | async" class="loading-container">
      <div class="spinner-border text-secondary" role="status"></div>
    </div>
  `,
})
export class LoadingComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoading$ = this.store.select('loading');
  }
}
