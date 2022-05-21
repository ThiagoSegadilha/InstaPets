import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  checaNomeUsuario(nomeUsuario: string) {

    return this.httpClient.get(`${API_URL} user/exists/ ${nomeUsuario}`);
  }
}
