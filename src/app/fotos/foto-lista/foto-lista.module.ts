import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FotoListaComponent} from "./foto-lista.component";
import {FotosComponent} from "./fotos/fotos.component";
import {BotaoLoadComponent} from "./botao-load/botao-load.component";
import {FiltroPorDescricao} from "./filtro-por-descricao.pipe";
import {FotoModule} from "../foto/foto.module";
import {CardModule} from "../../shared/components/card/card.module";
import { BuscaComponent } from './busca/busca.component';
import {DarkenOnHoverModule} from "../../shared/diretivas/darken-on-hover/darken-on-hover.module";

@NgModule({
  imports: [
    CommonModule,
    FotoModule,
    CardModule,
    DarkenOnHoverModule
  ],
  declarations: [
    FotoListaComponent,
    FotosComponent,
    BotaoLoadComponent,
    FiltroPorDescricao,
    BuscaComponent
  ]
})
export class FotoListaModule { }
