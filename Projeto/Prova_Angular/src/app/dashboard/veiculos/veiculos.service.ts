import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'http://localhost:3000/veiculos';
const API2 = 'http://localhost:3000/veiculos-dados';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private httpClient: HttpClient) { }

  listaDeVeiculos(){
    return this.httpClient.get<any>(`${API}`)
  }

  listaEstatisticasVeiculo(){
    return this.httpClient.get<any>(`${API2}`)
  }

}
