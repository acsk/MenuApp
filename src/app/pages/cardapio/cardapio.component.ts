import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {


  pratos: any[] = []
  produtos:Produto[]=[]
  sobremesas: Produto[] = []
  drinks: Produto[] = []
  displayPedido:boolean = false
  addProdutoDisplay:boolean = false
  addPedidoDisplay:boolean = false
  addProduto:any

 
  pratoSelecionado: any
  selectedValues: string[] = ['val1', 'val2'];
  etapa: number = 1

  constructor(
    private scroller: ViewportScroller, private router: Router,private httpProduto: ProdutosService
  ) {

  }
 
  ngOnInit(): void {
    
    this.httpProduto.getProdutos().then(data => {
      this.produtos = data
      this.pratos = this.produtos.filter(item=> item.categoria == "prato")
      this.sobremesas = this.produtos.filter(item=> item.categoria == "sobremesa")
      this.drinks = this.produtos.filter(item=> item.categoria == "drink")
     console.log(this.produtos)
    })
    
  }
  goToAnchor(param: any) {

    this.scroller.scrollToAnchor(param);
  }


  add(data: any) {
    console.log(data)
    this.addProdutoDisplay = true
    this.addProduto = data
  }
  openAddPedido(){
    this.addPedidoDisplay = true
  }
  addPedido() {
   
    this.addProdutoDisplay = false
    this.displayPedido = true
    this.closedModal()
  }

  choose(num: number) {
    this.etapa = num
  }

  closedModal(){
    this.addProdutoDisplay = false
  }
  closedModalPedido(){
    this.addPedidoDisplay = false
  }
}
