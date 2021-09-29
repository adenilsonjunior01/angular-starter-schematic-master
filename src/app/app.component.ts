import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'boilerplate-angular-init-project';

    constructor(private router: Router) {
        console.log(this.router.config);
    }
}
