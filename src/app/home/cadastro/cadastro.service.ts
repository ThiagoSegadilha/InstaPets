import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NovoUsuario} from "./novo-usuario";

const API_URL = 'http://localhost:3000'

@Injectable()
export class CadastroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  checaNomeUsuario(nomeUsuario: string) {

    return this.httpClient.get(`${API_URL}/user/exists/${nomeUsuario}`);
  }

  cadastro(novoUsuario: NovoUsuario) {

    return this.httpClient.post(API_URL + '/user/signup', novoUsuario);
  }
}
