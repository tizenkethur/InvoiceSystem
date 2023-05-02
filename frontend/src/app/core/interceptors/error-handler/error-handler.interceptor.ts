import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from '../../services/AuthService/auth-service.service';
import { SnackBarService } from '../../services/snackBarService/snack-bar.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          if (event.statusText !== 'OK') {
            this.snackBarService.showSuccessMessage(event.statusText);
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        const { message } = error.error;
        const statusCode = error.status;

        this.snackBarService.showErrorMessage(message, true);

        throw Error(message);
      })
    );
  }
}
