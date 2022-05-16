import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";
import {DetectorDePlataformaService} from "../../core/detector-de-plataforma/detector-de-plataforma.service";

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
    private router: Router,
    private detectorDePlataformaService: DetectorDePlataformaService
  ) {
  }

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
          this.detectorDePlataformaService.isPlataformaBrowser() &&
          this.nomeUsuarioInput.nativeElement.focus();
          alert('Usuario ou senha invalida');
        }
      );
  }
}
