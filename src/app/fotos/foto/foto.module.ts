import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FotoComponent} from "./foto.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    FotoComponent
  ],
  exports: [
    FotoComponent
  ]
})
export class FotoModule { }
