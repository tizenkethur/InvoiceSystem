import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler/error-handler.interceptor';
import { TokenInterceptor } from './core/interceptors/token/token.interceptor';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { UserGuard } from './core/guards/role/user.guard';
import { AdminGuard } from './core/guards/role/admin.guard';
import { BookKeeperGuard } from './core/guards/role/book-keeper.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
    UserGuard,
    AdminGuard,
    BookKeeperGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
