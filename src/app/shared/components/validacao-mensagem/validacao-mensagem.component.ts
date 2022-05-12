import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-validacao-mensagem',
  templateUrl: './validacao-mensagem.component.html',
  styleUrls: ['./validacao-mensagem.component.css']
})
export class ValidacaoMensagemComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit() {
  }

}
