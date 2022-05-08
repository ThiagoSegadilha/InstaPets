import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

import {Foto} from "../foto/foto";

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit, OnDestroy {

  fotos: Foto[] = [];
  filtro: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fotos = this.activatedRoute.snapshot.data['fotos'];
    this.debounce
      .pipe(debounceTime(500))
      .subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
