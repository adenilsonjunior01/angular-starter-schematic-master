import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'boilerplate-angular-init-project';

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly titleService: Title) {
    }

    ngOnInit(): void {
        this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
            while (route.firstChild) {
            route = route.firstChild;
            }
            return route;
        }),
        switchMap(route => route.data))
        .subscribe({
            next: event => this.titleService.setTitle(event.title)
        });
    }
}
