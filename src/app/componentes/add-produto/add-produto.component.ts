import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { HomeComponent } from '../../pages/home/home.component';


@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent {

  @Input() display:boolean = false
  @Input() produtoSelecionado:Produto | undefined
  @Output() closedModal = new EventEmitter();
  item?:Produto
  
  pratos: any[] = []
  sobremesas: any[] = []
  
  displayPedido: boolean = false
  
  selectedValues: string[] = ['val1', 'val2'];
  etapa: number = 1

  constructor(){}

  add(data: any) {
    
   // console.log(data)
    this.display = true
    this.produtoSelecionado = data
    this.item = data
    
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
    console.log(this.item)
    this.close()
  
  }

  choose(num: number) {
    this.etapa = num
  }
}
