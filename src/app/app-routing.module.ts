import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShellService } from '@app/shell/services/shell.service';
import { NgModule } from '@angular/core';

const routes: Routes = [
    ShellService.childRoutes([
        // example
        // {
        //     path: 'about',
        //     loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
        // },
    ]),
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}

