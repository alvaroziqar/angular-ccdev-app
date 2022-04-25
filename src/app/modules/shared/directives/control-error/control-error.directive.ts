import {
  Directive,
  OnInit,
  OnDestroy,
  Self,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { ControlErrorComponent } from './../../components/control-error-component/control-error-component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Best way with injectorToken
const ERRORS = {
  required: (error) => 'Campo obligatorio',
  minlength: ({ requiredLength, actualLength }) =>
    `Debe tener al menos ${requiredLength} caracteres. Actual ${actualLength}`,
  email: (error) => 'Email no válido',
};

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[formControlName]' })
export class ControlErrorDirective implements OnInit, OnDestroy {
  private ref: ComponentRef<ControlErrorComponent>;
  private unsubscribe = new Subject<void>();

  constructor(
    @Self() private control: NgControl,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        const controlErrors = this.control.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.getErrorFn(firstKey);
          const text = getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          this.setError(null);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setError(text: string) {
    if (!this.ref) {
      this.ref = this.vcr.createComponent(ControlErrorComponent);
    }

    this.ref.instance.text = text;
  }

  private getErrorFn(errorKey: string): (error: any) => string {
    if (ERRORS.hasOwnProperty(errorKey)) {
      return ERRORS[errorKey];
    } else {
      return () => `No error text provide for key ${errorKey}`;
    }
  }
}
