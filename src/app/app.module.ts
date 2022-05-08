import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FotosModule} from "./fotos/fotos.module";
import {AppRoutingModule} from "./app.routing.module";
import {ErrosModule} from "./erros/erros.module";
import {FotoListaResolver} from "./fotos/foto-lista/foto-lista.resolver";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotosModule,
    AppRoutingModule,
    ErrosModule
  ],
  providers: [
    FotoListaResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
