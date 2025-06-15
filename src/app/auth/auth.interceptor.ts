import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                this.logOutUser();
                if (error.status === 401) {
                    // token expired or invalid
                    this.router.navigate(['/login']);
                }
                if (error.status === 403) {
                    // token expired or invalid
                    this.router.navigate(['/login']);
                }
                if (error.status === 404) {
                    // token expired or invalid
                    this.router.navigate(['/login']);
                }
                return throwError(() => error);
            })
        );
    }

    private logOutUser() {
        localStorage.clear()
    }
}