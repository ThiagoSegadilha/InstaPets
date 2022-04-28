import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FotoComponent } from "./foto/foto.component";
import { FotoListaComponent } from './foto-lista/foto-lista.component';

@NgModule({
  declarations: [
    FotoComponent,
    FotoListaComponent
  ],
  exports: [
    FotoListaComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class FotosModule { }
