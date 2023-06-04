import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.getIsLoggedIn && this.authService.hasPermission(route.data.requiredRole)) {
      return true;
    }

    // Redireccionar al inicio de sesión si no está autenticado
    return this.router.createUrlTree(['/login']);
  }
}