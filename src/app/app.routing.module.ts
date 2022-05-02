import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FotoListaComponent } from "./fotos/foto-lista/foto-lista.component";
import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import {NotFoundComponent} from "./erros/not-found/not-found.component";

const routes: Routes = [
  {path: 'user/:userName', component: FotoListaComponent},
  {path: 'p/add', component: FotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
