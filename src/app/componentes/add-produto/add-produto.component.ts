import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementCart, incrementCart, resetCart } from 'src/app/store/cart/cart.actions';
import { ProdutoModel } from 'src/app/model/produtoModel';
import * as fromActionsPedido from 'src/app/store/pedido/pedido.actions';
import * as fromReducerPedido from 'src/app/store/pedido/pedido.reducer';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent {

  @Input() display:boolean = false
  @Input() produtoSelecionado:ProdutoModel = new ProdutoModel
  @Output() closedModal = new EventEmitter();
  item?:ProdutoModel
  
  pratos: any[] = []
  sobremesas: any[] = []
  
  displayPedido: boolean = false
  
  selectedValues: string[] = ['val1', 'val2'];
  etapa: number = 1

  counter$:Observable<number> = this.store.select("count")

  pedido$: Observable<ProdutoModel[]> = this.store.select(fromReducerPedido.getProdutosPedidoSelector)

  constructor(
    private store: Store<{ count: number, produto:ProdutoModel[]}>
    ) { 
    }

  increment() {
    this.store.dispatch(incrementCart());
  }

  decrement() {
    this.store.dispatch(decrementCart());
  }

  reset() {
    this.store.dispatch(resetCart());
  }

  close(){
    this.display=false
    this.closedModal.emit()
  }

  closedModalPedido(){
    this.displayPedido = false
  }
  addPedido() {
   
    this.display = false
    this.displayPedido = true
    this.item = this.produtoSelecionado

    
   this.increment()

   this.store.dispatch(fromActionsPedido.insereProduto({produtoAction: this.produtoSelecionado}))
    
    this.close()
  
  }

  choose(num: number) {
    this.etapa = num
  }
}
