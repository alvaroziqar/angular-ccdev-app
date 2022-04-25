import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@core/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ccd-auth-layout',
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent implements OnInit {
  user$: Observable<{ email: string; name: string }>;

  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.store.select('user');
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
