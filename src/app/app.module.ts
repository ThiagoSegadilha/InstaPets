import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FotosModule} from "./fotos/fotos.module";
import {AppRoutingModule} from "./app.routing.module";
import {RouterModule} from "@angular/router";
import {ErrosModule} from "./erros/erros.module";

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
