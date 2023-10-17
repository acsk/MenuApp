import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as fromPedidoActions from "./pedido.actions";
import { ProdutoModel } from "src/app/model/produtoModel";


export interface PedidoState {

  produtos: ProdutoModel[];

}

export const pedidoInitialState: PedidoState = {

  produtos: []
}


export const pedidoReducer = createReducer(

  pedidoInitialState,

  on(fromPedidoActions.insereProduto, (state, action) => {
    return state = {
      ...state,
      produtos: [...state.produtos, action.produtoAction]
    }
  }),
  on(fromPedidoActions.removeProduto, (state, action) => {
    const prod = [...state.produtos];
    const index = prod.findIndex(x => x.id === action.id);
    prod.splice(index, 1);
    return state = {
      ...state,
      produtos: prod
    }
  }));
  
const getProdutosFeatureState = createFeatureSelector<PedidoState>(
  'pedido'
)

export const getProdutosPedidoSelector = createSelector(
  getProdutosFeatureState, (state: PedidoState) => state.produtos
)
