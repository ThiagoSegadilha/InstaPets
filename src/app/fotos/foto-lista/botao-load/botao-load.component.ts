import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-botao-load',
  templateUrl: './botao-load.component.html',
  styleUrls: ['./botao-load.component.css']
})
export class BotaoLoadComponent implements OnInit {

  @Input() hasMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
