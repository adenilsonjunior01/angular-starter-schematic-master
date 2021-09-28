import { ICredentials } from '@app/@modules/authentication/interfaces/credentials-interface';

export class MockCredentialsService {
    credentials: ICredentials | null = {
        email: 'test',
        token: '123',
    };

    public isAuthenticated(): boolean {
        return !!this.credentials;
    }

    public setCredentials(credentials?: ICredentials, _remember?: boolean) {
        this.credentials = credentials || null;
    }
}
