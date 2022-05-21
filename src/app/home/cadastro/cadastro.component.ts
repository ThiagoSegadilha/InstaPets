import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {letraMinusculaValidator} from "../../shared/validadores/letra-minuscula.validator";

@Component({
  selector: 'app-logout',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
        ]
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
}
