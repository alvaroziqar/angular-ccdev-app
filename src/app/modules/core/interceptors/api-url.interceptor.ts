import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { environment } from '@env/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiRequest = request.clone({
      url: `${environment.apiUrl}${request.url}`,
    });

    return next.handle(apiRequest);
  }
}
