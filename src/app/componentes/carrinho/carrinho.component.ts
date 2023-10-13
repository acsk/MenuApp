import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AddPedidoComponent } from '../add-pedido/add-pedido.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
 @ViewChild(AddPedidoComponent) addPedido!:AddPedidoComponent
 @Output() displayPedido= new EventEmitter()

 
  openAddPedido(){
   
    this.displayPedido.emit()
    
  }
}
