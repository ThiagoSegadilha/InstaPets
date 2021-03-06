import { Injectable } from '@angular/core';
import { TokenService } from "../token/token.service";
import { BehaviorSubject } from "rxjs";
import {User} from "./user";
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private nomeUsuario: string;

  constructor(
    private tokenService: TokenService
  ) {
    this.tokenService.hasToken() &&
      this.decodeAndNotiFy();
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
    this.decodeAndNotiFy()
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  private decodeAndNotiFy() {
    const token = this.tokenService.getToken();
    const usuario = jwt_decode(token) as User;
    this.nomeUsuario = usuario.name;
    this.userSubject.next(usuario);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getNomeUsuario() {
    return this.nomeUsuario;
  }
}
