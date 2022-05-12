import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import {ValidacaoMensagemModule} from "../shared/components/validacao-mensagem/validacao-mensagem.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidacaoMensagemModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class HomeModule { }
