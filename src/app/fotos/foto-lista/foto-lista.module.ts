import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FotoListaComponent} from "./foto-lista.component";
import {FotosComponent} from "./fotos/fotos.component";
import {BotaoLoadComponent} from "./botao-load/botao-load.component";
import {FiltroPorDescricao} from "./filtro-por-descricao.pipe";
import {FotoModule} from "../foto/foto.module";

@NgModule({
  imports: [
    CommonModule,
    FotoModule
  ],
  declarations: [
    FotoListaComponent,
    FotosComponent,
    BotaoLoadComponent,
    FiltroPorDescricao
  ]
})
export class FotoListaModule { }
