import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { Shell } from '@app/shell/class/shell';

const routes: Routes = [
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

