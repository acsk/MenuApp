import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { ProdutoModel } from "src/app/model/produtoModel";
import * as fromProdutosAction from "../produtos/produtos.actions"



export interface ProdutosState{
    produtos: ProdutoModel[],
    produto:ProdutoModel,
    error: string  | ""
}

// INICIAL O ESTADO DE PRODUTOS
export const initialState: ProdutosState= {
    produtos: [],
    produto: new ProdutoModel,
    error: ""
}

const _produtosReducer = createReducer(
    initialState, 
    on(fromProdutosAction.LoadProdutosSuccess,(state,{ payload }) =>({...state, produtos: payload, error: ''})),
    on(fromProdutosAction.LoadProdutosFail,(state,{ error }) =>({...state, error: error})),
    
    on(fromProdutosAction.LoadProdutoSuccess,(state,{ payload }) =>({...state, produto: payload, error: ''})),
    on(fromProdutosAction.LoadProdutoFail,(state,{ error }) =>({...state, error: error})),
)

//SELECTOR
export function produtosReduce(state = initialState,action:Action){
    return _produtosReducer(state,action)
}

const getProdutosFeatureState = createFeatureSelector<ProdutosState>(
    'produtos'
)

export const getProdutos = createSelector(
    getProdutosFeatureState, (state: ProdutosState) => state.produtos
)
export const getProduto = createSelector(
    getProdutosFeatureState, (state: ProdutosState) => state.produto
)
export const getProdutoErro = createSelector(
    getProdutosFeatureState, (state: ProdutosState) => state.error
)



