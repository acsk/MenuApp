import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideRoutingModule } from './aside-routing.module';
import { AsideComponent } from './aside/aside.component';
import { AsideCardapioComponent } from './aside-cardapio/aside-cardapio.component';


@NgModule({
  declarations: [
    AsideComponent,
    AsideCardapioComponent
  ],
  imports: [
    CommonModule,
    AsideRoutingModule
  ],
  exports:[
    AsideComponent,
    AsideCardapioComponent
  ]
})
export class AsideModule { }
