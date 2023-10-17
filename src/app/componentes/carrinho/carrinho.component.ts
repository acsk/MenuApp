import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AddPedidoComponent } from '../add-pedido/add-pedido.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProdutoModel } from 'src/app/model/produtoModel';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
 @ViewChild(AddPedidoComponent) addPedido!:AddPedidoComponent
 @Output() displayPedido= new EventEmitter()

 counter$: Observable<number> = this.store.select("count")

 
 constructor(
  private store: Store<{ count: number, produto:ProdutoModel[]}>
  ) {
  
   
  }
  openAddPedido(){
   
    this.displayPedido.emit()
    
  }
}
