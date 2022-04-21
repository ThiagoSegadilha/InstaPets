import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor() { }

  descricao = 'gatosFilhotes';
  url = 'https://i1.wp.com/gatinhobranco.com/wp-content/uploads/2020/11/gatos-brigando-demais-atacando.jpg?fit=1200%2C800&ssl=1';

  ngOnInit(): void {
  }

}
