import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

// no se necesita importar en el app.modulo porque ya esta proveido de manera global
// mediante el decorador que tiene esta propiedad de providedIn: 'root'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyA8waZAOC0v_r5dzYKnMKxEluSeypyH1LU';
  // se necesita 2 srvicios: 1 para llamar lo que es la autenticacion y otro para crear usuarios


  // crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient ) {
    this.leerToken();
   }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}:signInWithPassword?key=${this.apikey}`, authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp[ 'idToken' ]);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}:signUp?key=${this.apikey}`, authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp[ 'idToken' ]);
        return resp;
      })
    );
  }


  private guardarToken( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {// para leer el token del localstorage
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    return this.userToken.length > 2;
  }
}
