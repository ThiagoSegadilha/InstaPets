import { Component, OnInit } from '@angular/core';
import {FotoService} from "../foto/foto.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Object[] = [];

  constructor(
    private fotoService: FotoService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;
    this.fotoService
      .listFromUser(userName)
      .subscribe(
        fotos => {
          console.log(fotos)
          this.fotos = fotos
        },
        error => console.log(error)
      );

  }

}
