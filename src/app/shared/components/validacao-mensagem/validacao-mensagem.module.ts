import {NgModule} from "@angular/core";

import { CommonModule } from '@angular/common';
import { ValidacaoMensagemComponent } from './validacao-mensagem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidacaoMensagemComponent
  ],
  exports: [
    ValidacaoMensagemComponent
  ]
})
export class ValidacaoMensagemModule { }
