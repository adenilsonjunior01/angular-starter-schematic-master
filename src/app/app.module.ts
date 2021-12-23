import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from '@core';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { ShellModule } from '@app/shell/shell.module';
import { AuthenticationModule } from '@app/authentication/authentication.module';
import { HomeModule } from '@app/@modules/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localePt);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        AuthenticationModule,
        ShellModule,
        HomeModule,
        NgbModule
    ],
    providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
    bootstrap: [AppComponent],
})
export class AppModule {}
