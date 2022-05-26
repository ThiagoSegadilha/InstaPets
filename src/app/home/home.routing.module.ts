import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "../core/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
}
