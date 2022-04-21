import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'InstaPets';
  fotos = [
    {
      url: "https://i1.wp.com/gatinhobranco.com/wp-content/uploads/2020/11/gatos-brigando-demais-atacando.jpg?fit=1200%2C800&ssl=1",
      declaracao: "gatosFilhotes"
    },
    {
      url: "https://scontent.fgig4-1.fna.fbcdn.net/v/t39.30808-6/244817327_4844502545571273_2967003519231102309_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VAM3bFgSEbMAX-F15ZY&_nc_ht=scontent.fgig4-1.fna&oh=00_AT_KzF_Eughru63Ao0OsyHyOlgaoAChPm9D4FfET3HPCbw&oe=62668D49",
      declaracao: "gatoPreto"
    }
  ];

}

