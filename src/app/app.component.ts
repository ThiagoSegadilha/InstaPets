import {Component, OnInit} from '@angular/core';
import {PhotoService} from "./photos/photo/photo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fotos: Object[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {

    this.photoService
      .listFromUser('flavio')
      .subscribe(
        fotos => this.fotos = fotos,
        error => console.log(error)
      );

  }
}
