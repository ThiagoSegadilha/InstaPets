import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {letraMinusculaValidator} from "../../shared/validadores/letra-minuscula.validator";
import {UsuarioJaExisteValidatorService} from "./usuario-ja-existe.validator.service";
import {NovoUsuario} from "./novo-usuario";
import {CadastroService} from "./cadastro.service";
import {Router} from "@angular/router";
import {errorObject} from "rxjs/internal-compatibility";

@Component({
  selector: 'app-logout',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioJaExisteValidatorService: UsuarioJaExisteValidatorService,
    private cadastroServise: CadastroService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      nomeCompleto: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      nomeUsuario: ['',
        [
          Validators.required,
          letraMinusculaValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.usuarioJaExisteValidatorService.checaNomeUsuario()
      ],
      senha: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
  }

  cadastro() {
    const novoUsuario = this.cadastroForm.getRawValue() as NovoUsuario;
    this.cadastroServise
      .cadastro(novoUsuario)
      .subscribe(
        () => this.router.navigate(['']),
        erro => console.log(erro)
      );
  }
}
