import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormDebugComponent } from './components/form-debug/form-debug.component';

@NgModule({
    declarations: [
    FormDebugComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule,
        FormDebugComponent
    ]
})
export class SharedModule {}
