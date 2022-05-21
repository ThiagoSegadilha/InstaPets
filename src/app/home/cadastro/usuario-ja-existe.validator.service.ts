import { Injectable } from '@angular/core';
import {CadastroService} from "./cadastro.service";
import {AbstractControl} from "@angular/forms";
import {debounceTime, first, map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioJaExisteValidatorService {

  constructor(
    private cadastroService: CadastroService
  ) { }

  checaNomeUsuario() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(500))
        .pipe(switchMap(nomeUsuario =>
          this.cadastroService.checaNomeUsuario(nomeUsuario)
        ))
        .pipe(map(jaExiste => jaExiste ? { nomeUsuarioExiste: true } : null))
        .pipe(first());
    }
  }

}
