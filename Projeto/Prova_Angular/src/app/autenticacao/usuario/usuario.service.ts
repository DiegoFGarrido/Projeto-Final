import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor() {

  }


  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  logout(){
    this.usuarioSubject.next({});
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token);
  }

}







