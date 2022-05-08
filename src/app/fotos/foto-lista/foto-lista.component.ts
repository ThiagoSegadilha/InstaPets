import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Foto} from "../foto/foto";

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Foto[] = [];
  filtro: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fotos = this.activatedRoute.snapshot.data['fotos'];
  }

}
