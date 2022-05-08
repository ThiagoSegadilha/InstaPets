import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FotoComponent } from "./foto/foto.component";
import { FotoListaComponent } from './foto-lista/foto-lista.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-lista/fotos/fotos.component';
import { FiltroPorDescricao } from "./foto-lista/filtro-por-descricao.pipe";
import {FotoListaResolver} from "./foto-lista/foto-lista.resolver";
import { BotaoLoadComponent } from './foto-lista/botao-load/botao-load.component';

@NgModule({
  declarations: [
    FotoComponent,
    FotoListaComponent,
    FotoFormComponent,
    FotosComponent,
    FiltroPorDescricao,
    BotaoLoadComponent,
  ],
  // exports: [
  //   FotoListaResolver
  // ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class FotosModule { }
