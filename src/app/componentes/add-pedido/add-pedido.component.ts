import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable, async } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoModel } from 'src/app/model/produtoModel';
import { ProdutosService } from 'src/app/services/produtos.service';
import * as fromReducerPedido from 'src/app/store/pedido/pedido.reducer';
import * as fromActionsPedido from 'src/app/store/pedido/pedido.actions';
import * as fromActionsCart from 'src/app/store/cart/cart.actions';
import * as fromReducerCart from 'src/app/store/cart/cart.reducer';
import { ConfirmDialog } from 'primeng/confirmdialog';


@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css'],
  providers: [MessageService, ConfirmationService]
})

export class AddPedidoComponent implements OnInit {

  @Input() display: boolean = false
  @Input() addProdutoPedido?: ProdutoModel
  @Output() closedModalPedido = new EventEmitter();

  produtos: ProdutoModel[] = []
  displayFinalizado: boolean = false
  displaySucesso: boolean = false
  displayErro: boolean = false
  somaTotal: any
  pedido$: Observable<ProdutoModel[]> = this.store.select(fromReducerPedido.getProdutosPedidoSelector)
  counter$: Observable<number> = this.store.select("count")
  soma: number= 0;

  constructor(
    private httpProduto: ProdutosService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private store: Store<{ count: number, produto: ProdutoModel[] }>

  ) { }


  ngOnInit(): void {

    // this.httpProduto.getProdutos().subscribe({
    //   next: (data) => {
    //     this.produtos = data
    //     this.produtos = this.produtos.filter(item => item.id! > 3)

    //   }
    // })
     this.pedido$.subscribe({
      next: ( data) => {
        this.produtos = data       
        
        let total = 0
      
        this.produtos.forEach(element => {
          total += element.preco
        });
       this.soma = total
      }
    })
  
  }


  close() {
    this.display = false
    this.displayErro = false
    this.displayFinalizado = false
    this.displaySucesso = false
    this.closedModalPedido.emit()
  }

  enviarPedido(param?: boolean) {
    if (param) {
      this.displaySucesso = true
      this.displayFinalizado = false
      this.displayErro = false
      return
    }

    this.displayFinalizado = true

    setTimeout(() => {
      this.displayFinalizado = false
      this.displayErro = true
    }, 2000);



  }
  removerItem(produto: ProdutoModel) {

    this.confirmationService.confirm({
      message: `Deseja remover o item <b> ${produto.nome}</b>  do pedido?`,
      header: 'Remoção de item',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(fromActionsPedido.removeProduto({ id: produto.id! }))
        this.store.dispatch(fromActionsCart.decrementCart())
        this.messageService.add({ severity: 'success', detail: `${produto.nome} removido com sucesso!` });

        if (this.produtos.length == 0) {
          this.close()
        }
      },

      reject: () => { }
    });

  }

  
}


