import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  usuario: UsuarioModel = new UsuarioModel();
  ngOnInit() {
  }
  login( form: NgForm ) {
    if( form.invalid ) { return; }
    console.log('formulario enviado');
    console.log(form);
    console.log('imprimir si el formularioj es valido');
  }

}
