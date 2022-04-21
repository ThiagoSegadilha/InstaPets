import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {FotosModule} from "./fotos/fotos.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
