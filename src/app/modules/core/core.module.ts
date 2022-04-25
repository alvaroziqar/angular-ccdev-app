import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { HttpErrorInterceptor } from './interceptors/error.interceptor';
import { ApiUrlInterceptor } from './interceptors/api-url.interceptor';
import { AuthService } from './auth/auth.service';

// Initializer
export function servicesOnRun(auth: AuthService) {
  return () => auth.init();
}

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [
    // Initializer
    {
      provide: APP_INITIALIZER,
      useFactory: servicesOnRun,
      multi: true,
      deps: [AuthService],
    },
    // Interceptors
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
