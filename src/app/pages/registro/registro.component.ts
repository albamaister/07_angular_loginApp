import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
   }

   onSubmit(form: NgForm) {
     if ( form.invalid ) { return; }
     Swal.fire({
      allowOutsideClick: false, // para prevenir que la persona pueda cerrar el clickAlert si hace click afuera
      type: 'info',
      text: 'Espere por favor...'
    });

     this.auth.nuevoUsuario(this.usuario).subscribe(resp => {
      Swal.close();
      this.router.navigateByUrl('/home');
      console.log(resp);
     }, (err) => {
       console.log(err.error.error.message);
       Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });
     });
   }


}
