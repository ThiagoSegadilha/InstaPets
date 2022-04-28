import { Component, OnInit } from '@angular/core';
import {FotoService} from "../foto/foto.service";

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Object[] = [];

  constructor(private fotoService: FotoService) {
  }

  ngOnInit(): void {

    this.fotoService
      .listFromUser('flavio')
      .subscribe(
        fotos => {
          console.log(fotos)
          this.fotos = fotos
        },
        error => console.log(error)
      );

  }

}
