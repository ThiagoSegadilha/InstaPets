import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {Observable} from "rxjs";
import {User} from "../user/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario$: Observable<User>;

  constructor(
    private userService: UserService
  ) {
    this.usuario$ = userService.getUser();
  }

  ngOnInit() {
  }

}
