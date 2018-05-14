// This file handles access to links. It protects unauthorised access

import { Injectable } from '@angular/core';//To inject service
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authser: AuthService, private router: Router) { }

    //standard method used to implement CanActivate
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authser.isAuth() == true) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }

    canLoad(route: Route) {
        if (this.authser.isAuth() == true) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}