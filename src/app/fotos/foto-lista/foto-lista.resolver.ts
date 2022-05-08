import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto';

@Injectable()
export class FotoListaResolver implements Resolve<Observable<Foto[]>>{

  constructor(private service: FotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Foto[]> {
    const userName = route.params.userName;
    return this.service.listFromUser(userName);
  }

}
