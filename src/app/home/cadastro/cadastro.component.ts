import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {letraMinusculaValidator} from "../../shared/validadores/letra-minuscula.validator";
import {UsuarioJaExisteValidatorService} from "./usuario-ja-existe.validator.service";
import {NovoUsuario} from "./novo-usuario";
import {CadastroService} from "./cadastro.service";
import {Router} from "@angular/router";
import {DetectorDePlataformaService} from "../../core/detector-de-plataforma/detector-de-plataforma.service";

@Component({
  selector: 'app-logout',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [ UsuarioJaExisteValidatorService ]
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioJaExisteValidatorService: UsuarioJaExisteValidatorService,
    private cadastroServise: CadastroService,
    private router: Router,
    private detectorDePlataformaService: DetectorDePlataformaService
  ) {
  }

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

    this.detectorDePlataformaService.isPlataformaBrowser() &&
      this.inputEmail.nativeElement.focus();
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
