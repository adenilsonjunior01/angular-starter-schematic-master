import { environment } from '@env/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '@app/authentication/services/login.service';

const KEY = environment.cypto_key;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public form!: FormGroup;
    public valueDecript = '';

    constructor(
        private readonly loginService: LoginService,
        private readonly formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    public login(): void {
    }

    private initForm(): void {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            remember: true,
        });
    }
}
