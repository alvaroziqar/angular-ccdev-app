import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  delay = 4000;
  toastsSub = new BehaviorSubject<{
    [id: string]: { id: string; text: string; options: any };
  }>({});
  toasts$ = this.toastsSub.asObservable().pipe(
    map((toasts) => {
      return Object.keys(toasts).map((key) => toasts[key]);
    })
  );

  success(text: string) {
    this.show(text, { classname: 'bg-success text-light', delay: this.delay });
  }

  error(text: string) {
    this.show(text, { classname: 'bg-danger text-light', delay: this.delay });
  }

  show(text: string, options: any = {}) {
    const id = makeId(4);

    this.toastsSub.next({
      ...this.toastsSub.getValue(),
      [id]: {
        id,
        text,
        options,
      },
    });
  }

  remove(toastId: string) {
    const toasts = this.toastsSub.getValue();
    delete toasts[toastId];
    this.toastsSub.next(toasts);
  }
}

function makeId(length) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
