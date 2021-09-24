import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (request.url === '/login' && !/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: environment.api_url + request.url });
        } else if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${
                        JSON.parse(<string>localStorage.getItem('credentials'))
                            .token
                    }`,
                },
                url: environment.api_url + request.url,
            });
        }
        return next.handle(request);
    }
}
