import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsistenciaModel } from '../Models/asistencia.model';

import {environment} from '../../environments/environment'

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  url:string = 'http://localhost/ApiConeculta/';
  
  constructor(private http:HttpClient) {}
  
  public getHorarios(){
    return this.http.get<AsistenciaModel[]>(this.url)
  }

  checadas(id) {
    console.log(id);
    return this.http.get(`${ URL }/checada/${id}`);
  }

  faltas(id) {
    console.log(id);
    return this.http.get(`${ URL }/faltas/${id}`);
  }

}
