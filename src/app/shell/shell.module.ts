import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from '@app/shell/shell.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { NavRigthComponent } from './components/nav-rigth/nav-rigth.component';
import { SharedModule } from '@shared/shared.module';
import { AuthenticationModule } from '@app/authentication/authentication.module';

@NgModule({
    declarations: [ShellComponent, MenuNavComponent, NavRigthComponent],
    imports: [CommonModule, SharedModule, AuthenticationModule],
})
export class ShellModule {}
