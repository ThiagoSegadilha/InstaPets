import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import {ValidacaoMensagemModule} from "../shared/components/validacao-mensagem/validacao-mensagem.module";
import {RouterModule} from "@angular/router";
import {CadastroComponent} from "./cadastro/cadastro.component";
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidacaoMensagemModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    CadastroComponent,
    HomeComponent
  ],
  exports: [
    LoginComponent,
    CadastroComponent
  ]
})
export class HomeModule { }
