import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FotoListaComponent } from "./fotos/foto-lista/foto-lista.component";
import { FotoFormComponent } from "./fotos/foto-form/foto-form.component";
import {NotFoundComponent} from "./erros/not-found/not-found.component";
import {FotoListaResolver} from "./fotos/foto-lista/foto-lista.resolver";
import {LoginComponent} from "./home/login/login.component";
import {CadastroComponent} from "./home/cadastro/cadastro.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./core/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'user/:userName',
    component: FotoListaComponent,
    resolve: { fotos: FotoListaResolver }
  },
  {
    path: 'p/add',
    component: FotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
