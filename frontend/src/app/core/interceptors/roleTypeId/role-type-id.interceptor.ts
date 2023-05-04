import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/AuthService/auth-service.service';

@Injectable()
export class RoleTypeIdInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('roletype');
    console.log(this.authService.getToken());
    if (this.authService.getToken()) {
      console.log('login');
      this.authService.getRoleTypeId();
    }
    return next.handle(request);
  }
}
