import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import {TokenService} from "../token/token.service";
import {UserService} from "../user/user.service";

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) { }

  autenticacao(nomeUsuario: string, senha: string) {
    return this.httpClient
      .post(
        API_URL + '/user/login',
        {userName: nomeUsuario, password: senha},
        {observe: 'response'})
      .pipe(tap( resposta => {
        const authToken = resposta.headers.get('x-access-token');
        this.userService.setToken(authToken);
      }))
  }
}
