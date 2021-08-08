import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { tap } from 'rxjs/operators';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(usuario: string, pass: string) {
    
    const loginData = {
      usuario,
      pass,
    };

    console.log(loginData);
    return this.http.post(`${ URL }/login`, loginData).pipe(
      tap( (response: any) => {
        console.log(response);
        localStorage.setItem('usuario', response.data.usuario);
        localStorage.setItem('id', response.data.ID);
        localStorage.setItem('nombre', response.data.nombre);
        localStorage.setItem('trabajador', response.data.trabajador);
      }
      )
    );
  }

  getCurrentUser(){
    return localStorage.getItem('usuario');
  }

  getCurrentId(){
    return localStorage.getItem('id');
  }

  getCurrentNombre(){
    return localStorage.getItem('nombre');
  }

  getCurrentIdTrabajador(){
    return localStorage.getItem('trabajador');
  }

  logout(){
    localStorage.clear();
  }

}
