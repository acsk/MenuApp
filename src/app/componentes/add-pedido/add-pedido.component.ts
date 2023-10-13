import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})

export class AddPedidoComponent implements OnChanges, OnInit {

  @Input() display: boolean = false
  @Input() addProdutoPedido?: Produto
  @Output() closedModalPedido = new EventEmitter();

  produtos: Produto[] = []
  displayFinalizado: boolean = false
  displaySucesso: boolean = false
  displayErro: boolean = false

  constructor(
    private httpProduto: ProdutosService,
 //   public messageService: MessageService,
    private primengConfig: PrimeNGConfig
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.httpProduto.getProdutos().then(data => {
      this.produtos = data
     this.produtos = this.produtos.filter(item => item.id > 3)
    // console.log(this.produtos)
    })
    
  }

  ngOnChanges(): void {
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
  removerItem(id:number){

    this.produtos = this.produtos.filter(item => item.id != id)
    // this.messageService.add({
    //   severity: "success",
    //   summary: "Service Message",
    //   detail: "Via MessageService"
    // });
   /// this.messageService.add({severity:'success', detail:'Item Removido com sucesso!'});
  }
}
