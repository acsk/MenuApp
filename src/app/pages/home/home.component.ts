import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos:Produto[]=[]
  addProdutoDisplay:boolean = false
  addPedidoDisplay:boolean = false
  displayMinhaConta:boolean = false
  addProduto:any

  constructor(private httpProduto: ProdutosService) { }

  ngOnInit(): void {
    this.httpProduto.getProdutos().then(data => {
      this.produtos = data
     console.log(this.produtos)
    })
    
  }
  openAddPedido(){
    this.addPedidoDisplay = true
  }

  openMinhaConta(){
    this.displayMinhaConta = true
    console.log("Minha Conta")
  }


  add(data:Produto){
   
    this.addProdutoDisplay = true
    this.addProduto = data
    
  }

  closedModal(){
    this.addProdutoDisplay = false
  }

  closedModalPedido(){
    this.addPedidoDisplay = false
  }

  closedModalMinhaConta(){
    this.displayMinhaConta = false
  }
}
