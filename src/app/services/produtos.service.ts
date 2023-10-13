import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  constructor(private http: HttpClient) { }
  getProdutos() {
    return this.http.get<any>('assets/produtos.json')
    .toPromise()
    .then(res => <Produto[]>res.data)
    .then(data => { return data; });
}
}
