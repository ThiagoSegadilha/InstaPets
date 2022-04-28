import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FotoListaComponent } from "./fotos/foto-lista/foto-lista.component";
import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";

const routes: Routes = [
  {path: 'user/flavio', component: FotoListaComponent},
  {path: 'p/add', component: FotoFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
