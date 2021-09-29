import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ICredentials } from '@app/authentication/interfaces/credentials-interface';
import { IToken } from '@app/authentication/interfaces/token-interface';

const credentialsKey = 'credentials';

@Injectable({
    providedIn: 'root',
})
export class CredentialsService {
    private _credentials: ICredentials | null = null;
    private readonly _jwtHelper = new JwtHelperService();

    public tokenDecode: any;

    constructor() {
        const savedCredentials =
            sessionStorage.getItem(credentialsKey) ||
            localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
            this.decodeToken();
        }
    }

    public decodeToken(): IToken | undefined {
        this.tokenDecode = this._jwtHelper.decodeToken(
            this._credentials?.token
        );
        return this.tokenDecode;
    }

    public isTokenExpired(): boolean {
        return this._jwtHelper.isTokenExpired(this.tokenDecode);
    }

    public expirationDate(): any {
        return this._jwtHelper.getTokenExpirationDate(this.tokenDecode);
    }

    isAuthenticated(): boolean {
        return !!this.credentials;
    }

    get credentials(): ICredentials | null {
        return this._credentials;
    }

    public setCredentials(credentials?: ICredentials, remember?: boolean) {
        this._credentials = credentials || null;

        if (credentials) {
            const storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        } else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    }
}
