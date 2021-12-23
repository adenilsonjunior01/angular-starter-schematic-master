import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/authentication/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public form!: FormGroup;

    constructor(
        private readonly loginService: LoginService,
        private readonly formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            remember: true,
        });
    }
}
