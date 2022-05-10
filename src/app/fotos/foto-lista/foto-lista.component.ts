import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import {Foto} from "../foto/foto";
import {FotoService} from "../foto/foto.service";

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Foto[] = [];
  filtro: string = '';
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

  }

  load() {
    this.fotoService.listFromUserPaginacao(this.nomeUsuario, ++this.currentPage)
      .subscribe(fotos => {
        this.filtro = '';
        this.fotos = this.fotos.concat(fotos);
        if (!fotos.length) {
          this.hasMore = false;
        }
      })
  }
}
