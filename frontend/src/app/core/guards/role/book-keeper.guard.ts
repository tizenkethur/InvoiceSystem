import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
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
export class BookKeeperGuard {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.getRoleTypeId() ===
      RoleType['Book keeper'].toString()
      ? true
      : this.router.navigate(['main']);
  }
}
