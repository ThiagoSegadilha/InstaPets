import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() valor: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(500))
      .subscribe(filtro => this.onTyping.emit(filtro));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
