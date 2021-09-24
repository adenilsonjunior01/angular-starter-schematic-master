import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { ApiInterceptor } from '@core/http-interceptors/api.interceptor';
import { ErrorHandleInterceptor } from '@core/http-interceptors/error-handle.interceptor';
import { RouteReusableStrategy } from '@core/router-reuse-strategy/route-reusable-strategy';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandleInterceptor,
            multi: true
        },
        {
            provide: RouteReuseStrategy,
            useClass: RouteReusableStrategy
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}
