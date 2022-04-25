import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { ToastService } from '@core/services/toast.service';
import { Store } from '@core/store/store';
import { finalize } from 'rxjs';

@Component({
  selector: 'ccd-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private store: Store
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['info@yampi.co', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.set('loading', true);
      this.authService
        .login(this.form.value)
        .pipe(finalize(() => this.store.set('loading', false)))
        .subscribe((result) => {
          if (result) {
            this.toastService.success('Login correcto');
            this.router.navigate(['/']);
          } else {
            this.toastService.error('Error al hacer login');
          }
        });
    }
  }
}
