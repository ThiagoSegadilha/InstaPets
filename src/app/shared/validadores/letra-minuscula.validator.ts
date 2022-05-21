import { AbstractControl } from '@angular/forms';

export function letraMinusculaValidator(control: AbstractControl) {

  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { letraMinuscula: true }
  }
  return null;
}
