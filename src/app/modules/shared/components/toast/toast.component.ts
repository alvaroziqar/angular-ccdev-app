import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToastService } from '@core/services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ccd-toast',
  templateUrl: './toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {
  toasts$: Observable<{ id: string; text: string; options: any }[]>;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toasts$ = this.toastService.toasts$;
  }

  removeToast(id: string) {
    this.toastService.remove(id);
  }
}
