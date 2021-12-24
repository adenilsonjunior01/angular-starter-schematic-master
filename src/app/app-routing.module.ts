import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { Shell } from '@app/shell/class/shell';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    Shell.childRoutes([
        {
            path: '',
            loadChildren: () => import('./@modules/home/home.module').then((m) => m.HomeModule),
        }
    ]),
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}

