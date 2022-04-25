import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ccd-control-error',
  template: ` <p class="form-error" [class.hide]="_hide">{{ _text }}</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  _text: string;
  _hide = true;

  @Input()
  set text(value: string) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
