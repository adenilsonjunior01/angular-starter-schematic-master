import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ErrorControlMessageComponent } from './components/error-control-message/error-control-message.component';
import { ModalModule } from './components/modal/modal.module';
import { FormDebugComponent } from './components/form-debug/form-debug.component';

@NgModule({
    declarations: [
    FormDebugComponent,
    ErrorControlMessageComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ModalModule
    ],
    exports: [
        RouterModule,
        FormDebugComponent,
        ModalModule,
        ErrorControlMessageComponent
    ]
})
export class SharedModule {}
