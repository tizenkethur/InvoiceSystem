import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/AuthService/auth-service.service';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';

@Injectable({
  providedIn: 'root',
})
export class AdminsOnlyGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.currentRole === RoleType[1]
      ? true
      : this.router.navigate(['main']);
  }
}
