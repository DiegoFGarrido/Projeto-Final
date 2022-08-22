import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['home']);
      },
    (error) => {
      alert('Usuário ou senha inválido');
      console.log(error);
      }
    );
  }
}
