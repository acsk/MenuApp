import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoModel } from 'src/app/model/produtoModel';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos:Array<ProdutoModel>=[]
  addProdutoDisplay:boolean = false
  addPedidoDisplay:boolean = false
  displayMinhaConta:boolean = false
  addProduto:any

  constructor(private httpProduto: ProdutosService) { }

  ngOnInit(): void {
    this.httpProduto.getProdutos().subscribe({
      next: (data) =>  {
        this.produtos = data

        console.log(data)
      }
    })
    

    
  }
  openAddPedido(){
    this.addPedidoDisplay = true
  }

  openMinhaConta(){
    this.displayMinhaConta = true
    console.log("Minha Conta")
  }


  add(data:ProdutoModel){
   
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
