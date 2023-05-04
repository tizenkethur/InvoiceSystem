import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/authService/auth-service.service';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';

@Injectable({
  providedIn: 'root',
})
export class NoUserGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.roleObservable$.toString() !== RoleType[3]
      ? true
      : this.router.navigate(['main']);
  }
}
