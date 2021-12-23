import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CredentialsService } from '@app/authentication/services/credentials.service';
import { Observable, of, throwError } from 'rxjs';
import { ICredentials } from '@app/authentication/interfaces/credentials-interface';
import { ILogin } from '@app/authentication/interfaces/login-interface';
import { catchError, map, tap } from 'rxjs/operators';

const routes = {
    authentication: () => '/login',
};

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(
        private readonly httpCliente: HttpClient,
        private readonly credentialsSerive: CredentialsService
    ) {}

    public login(context: ILogin): Observable<ICredentials> {
        return this.httpCliente.post<ICredentials>(routes.authentication(), context).pipe(
            catchError((error: HttpErrorResponse) => throwError(error)),
            tap(body => {
                this.credentialsSerive.setCredentials(body, context.remenber)
            })
        );
    }

    public logout(): Observable<boolean> {
        this.credentialsSerive.setCredentials()
        return of(true);
    }
}
