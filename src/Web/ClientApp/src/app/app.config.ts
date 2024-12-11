import { APP_ID, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideZoneChangeDetection } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { routes } from './app.routes';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
  }
  
  // Agregar el proveedor BASE_URL a la configuración global
const baseUrlProvider = {
    provide: 'BASE_URL',
    useFactory: getBaseUrl,
    deps: []
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: APP_ID, useValue: 'ng-cli-universal' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    importProvidersFrom(ModalModule.forRoot(), BrowserAnimationsModule),
    baseUrlProvider
  ]
};
