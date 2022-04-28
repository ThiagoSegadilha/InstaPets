import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { FotoComponent } from "./foto/foto.component";
import { FotoListaComponent } from './foto-lista/foto-lista.component';
import { FotoFormComponent } from './foto-form/foto-form.component';

@NgModule({
  declarations: [
    FotoComponent,
    FotoListaComponent,
    FotoFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class FotosModule { }
