import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
// no se necesita importar en el app.modulo porque ya esta proveido de manera global
// mediante el decorador que tiene esta propiedad de providedIn: 'root'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey: 'AIzaSyA8waZAOC0v_r5dzYKnMKxEluSeypyH1LU';
  // se necesita 2 srvicios: 1 para llamar lo que es la autenticacion y otro para crear usuarios


  // crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClientModule ) { }

  logout() {}

  login(usuario: UsuarioModel) {}

  nuevoUsuario(usuario: UsuarioModel) {}
}
