import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foto } from "../../foto/foto";

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnChanges {

  @Input() fotos: Foto[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.fotos) {
      this.rows = this.grupoDeColunas(this.fotos);
    }
  }

  grupoDeColunas(fotos: Foto[]) {
    const novasLinhas = [];

    for (let i = 0; i < fotos.length; i+=3) {
      novasLinhas.push(fotos.slice(i, i+3));
    }

    return novasLinhas;
  }

}
