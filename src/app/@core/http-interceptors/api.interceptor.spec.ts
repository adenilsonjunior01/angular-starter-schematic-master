import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ApiInterceptor } from './api.interceptor';
import { Type } from '@angular/core';
import { environment } from '@env/environment';

describe('ApiInterceptor', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ApiInterceptor],
        })
    );

    let http: HttpClient;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
                },
            ],
        });

        http = TestBed.inject(HttpClient);
        httpMock = TestBed.inject(
            HttpTestingController as Type<HttpTestingController>
        );
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        const interceptor: ApiInterceptor = TestBed.inject(ApiInterceptor);
        expect(interceptor).toBeTruthy();
    });

    it('should not prepend environment.serverUrl to request url', () => {
        // Act
        http.get('hTtPs://domain.com/toto').subscribe();

        // Assert
        httpMock.expectOne({ url: 'hTtPs://domain.com/toto' });
    });
});
