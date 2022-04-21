import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FotoComponent} from "./foto/foto.component";

@NgModule({
  declarations: [
    FotoComponent
  ],
  exports: [
    FotoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FotosModule { }
