import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import {ValidacaoMensagemModule} from "../shared/components/validacao-mensagem/validacao-mensagem.module";
import {RouterModule} from "@angular/router";
import {CadastroComponent} from "./cadastro/cadastro.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidacaoMensagemModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  exports: [
    LoginComponent,
    CadastroComponent
  ]
})
export class HomeModule { }
