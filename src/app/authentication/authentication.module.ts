import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent, AuthenticationComponent],
    imports: [CommonModule, AuthenticationRoutingModule, SharedModule, ReactiveFormsModule]
})
export class AuthenticationModule {}
