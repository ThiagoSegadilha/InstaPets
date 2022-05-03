import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FotoComponent } from "./foto/foto.component";
import { FotoListaComponent } from './foto-lista/foto-lista.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-lista/fotos/fotos.component';

@NgModule({
  declarations: [
    FotoComponent,
    FotoListaComponent,
    FotoFormComponent,
    FotosComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class FotosModule { }
