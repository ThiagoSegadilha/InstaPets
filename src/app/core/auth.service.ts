import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  autenticacao(nomeUsuario: string, senha: string) {
    return this.httpClient.post(API_URL + '/user/login', {nomeUsuario: nomeUsuario, senha: senha});
  }
}
