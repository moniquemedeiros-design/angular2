import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  senha = '';
  logarAutomaticamente = false;

  entrar() {

    if (
      this.email === 'admin' &&
      this.senha === '123456'
    ) {

      alert('Login realizado com sucesso!');

    } else {

      alert('E-mail ou senha inválidos!');

    }

  }

}