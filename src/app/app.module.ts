import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FotosModule} from "./fotos/fotos.module";
import {AppRoutingModule} from "./app.routing.module";
import {ErrosModule} from "./erros/erros.module";
import {FotoListaResolver} from "./fotos/foto-lista/foto-lista.resolver";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FotosModule,
        AppRoutingModule,
        ErrosModule,
        CoreModule
    ],
  providers: [
    FotoListaResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
