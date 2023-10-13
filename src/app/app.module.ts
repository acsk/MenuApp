import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './shared/prime/prime.module';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { AsideModule } from './pages/asides/aside.module';
import { HttpClientModule } from '@angular/common/http';
import { AddProdutoComponent } from './componentes/add-produto/add-produto.component';
import { AddPedidoComponent } from './componentes/add-pedido/add-pedido.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { MinhaContaComponent } from './componentes/minha-conta/minha-conta.component';



@NgModule({
  declarations: [
    AppComponent,  
    HomeComponent,
    CardapioComponent,
    AddProdutoComponent,
    AddPedidoComponent,
    CarrinhoComponent,
    MinhaContaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsideModule,
    PrimeModule,
    HttpClientModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
