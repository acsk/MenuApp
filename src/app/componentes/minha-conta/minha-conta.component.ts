import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent {

  @Input() display: boolean = false
  @Output() closeModal = new EventEmitter()


  close() {
    this.display = false
    this.closeModal.emit()
  }
}




