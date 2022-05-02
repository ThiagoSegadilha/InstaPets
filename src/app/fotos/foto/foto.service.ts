import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Foto } from "./foto";

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listFromUser(userName: string) {

    return this.httpClient
                .get<Foto[]>(API + '/' + userName + '/photos')
  }
}
