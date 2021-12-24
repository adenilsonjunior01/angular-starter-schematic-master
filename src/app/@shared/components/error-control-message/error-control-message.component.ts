import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidations } from '@shared/class/form-validations';

@Component({
  selector: 'app-error-control-message',
  templateUrl: './error-control-message.component.html',
})
export class ErrorControlMessageComponent  {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() message!: string;
  constructor() {}



  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrorMessage(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }
}
