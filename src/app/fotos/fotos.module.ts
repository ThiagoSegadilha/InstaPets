import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import {FotoModule} from "./foto/foto.module";
import {FotoFormModule} from "./foto-form/foto-form.module";
import {FotoListaModule} from "./foto-lista/foto-lista.module";

@NgModule({
  declarations: [],
  imports: [
    FotoModule,
    FotoFormModule,
    FotoListaModule,
    CommonModule
  ]
})
export class FotosModule { }
