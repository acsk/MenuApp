import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { ProdutoModel } from '../model/produtoModel';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos():Observable<ProdutoModel[]> {

   
    return this.http.get<ProdutoModel[]>('assets/produtos.json')
     
  }

  // public getUsers(): Observable<UserInformation> {
  //   const url = 'https://reqres.in/api/users?page=1';

  //   return this.http.get<UserInformation>(url);
  // }

  
  // handleError(error: any): Observable<any> {
  //   console.log('ERRO NA REQUISIÇÃO => ' + error)
  //   return throwError(error);
  // }
}
