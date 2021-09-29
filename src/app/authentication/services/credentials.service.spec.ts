import { TestBed } from '@angular/core/testing';

import { CredentialsService } from './credentials.service';
import { ICredentials } from '@app/authentication/interfaces/credentials-interface';

const credentialsKey = 'credentials';

describe(CredentialsService.name, () => {
    let service: CredentialsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CredentialsService],
        });
        service = TestBed.inject(CredentialsService);
    });

    afterEach(() => {
        localStorage.removeItem(credentialsKey);
        sessionStorage.removeItem(credentialsKey);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe(CredentialsService.prototype.setCredentials.name, () => {
        it('should authenticate user if credentials are set', () => {
            service.setCredentials({ email: 'test', token: '123' });

            expect(service.isAuthenticated()).toBeTrue();
            expect((service.credentials as ICredentials).email).toBe('test');
        });

        it('should clean authentication', () => {
            service.setCredentials();

            expect(service.isAuthenticated()).toBeFalse();
        });

        it('should persist credentials for the session', () => {
            service.setCredentials({ email: 'test', token: '123' });

            expect(sessionStorage.getItem(credentialsKey)).not.toBeNull();
            expect(localStorage.getItem(credentialsKey)).toBeNull();
        });

        it('should clear user authentication', () => {
            service.setCredentials();

            expect(service.isAuthenticated()).toBe(false);
            expect(service.credentials).toBeNull();
            expect(sessionStorage.getItem(credentialsKey)).toBeNull();
            expect(localStorage.getItem(credentialsKey)).toBeNull();
        });
    });
});
