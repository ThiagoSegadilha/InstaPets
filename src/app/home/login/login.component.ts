import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  @ViewChild('nomeUsuarioInput') nomeUsuarioInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      nomeUsuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    const nomeUsuario = this.loginForm.get('nomeUsuario').value
    const senha = this.loginForm.get('senha').value

    this.authService
      .autenticacao(nomeUsuario, senha)
      .subscribe(
        () => this.router.navigate([`user`, nomeUsuario]),
        erro => {
          this.loginForm.reset();
          this.nomeUsuarioInput.nativeElement.focus();
          alert('Usuario ou senha invalida');
        }
      );
  }
}
