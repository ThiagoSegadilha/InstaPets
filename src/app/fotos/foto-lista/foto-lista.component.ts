import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

import {Foto} from "../foto/foto";
import {isObservable} from "rxjs/internal-compatibility";
import {FotoService} from "../foto/foto.service";

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit, OnDestroy {

  fotos: Foto[] = [];
  filtro: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  nomeUsuario: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private fotoService: FotoService
  ) {
  }

  ngOnInit(): void {
    this.nomeUsuario = this.activatedRoute.snapshot.params['userName'];
    this.fotos = this.activatedRoute.snapshot.data['fotos'];
    this.debounce
      .pipe(debounceTime(500))
      .subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.fotoService.listFromUserPaginacao(this.nomeUsuario, ++this.currentPage)
      .subscribe(fotos => {
        this.fotos = this.fotos.concat(fotos);
        if (!fotos.length) {
          this.hasMore = false;
        }
      })
  }

}
