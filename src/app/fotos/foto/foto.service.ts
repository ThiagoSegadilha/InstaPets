import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
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

  listFromUserPaginacao(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.httpClient
                .get<Foto[]>(API + '/' + userName + '/photos', { params })
  }
}
