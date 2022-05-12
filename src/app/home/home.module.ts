import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import {ValidacaoMensagemModule} from "../shared/components/validacao-mensagem/validacao-mensagem.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidacaoMensagemModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class HomeModule { }
