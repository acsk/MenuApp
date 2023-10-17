import { createAction, props } from "@ngrx/store";
import { ProdutoModel } from "src/app/model/produtoModel";




export const enum produtosTypeAction  {

    LOAD_PRODUTOS = "[LOAD_PRODUTOS] LOAD PRODUTOS ",
    LOAD_PRODUTOS_SUCCESS = "[LOAD_PRODUTOS_SUCCESS] LOAD PRODUTOS SUCESSO ",
    LOAD_PRODUTOS_FAIL = "[LOAD_PRODUTOS_FAIL] LOAD PRODUTOS FAIL ",
    
    LOAD_PRODUTO = "[LOAD_PRODUTO] LOAD PRODUTO ",
    LOAD_PRODUTO_SUCCESS = "[LOAD_PRODUTO_SUCCESS] LOAD PRODUTO SUCESSO ",
    LOAD_PRODUTO_FAIL = "[LOAD_PRODUTO_FAIL] LOAD PRODUTO FAIL ",
}

export const LoadProdutos = createAction  (
    produtosTypeAction.LOAD_PRODUTOS
)
export const LoadProdutosSuccess = createAction  (
    produtosTypeAction.LOAD_PRODUTOS_SUCCESS,
    props<{payload:ProdutoModel[]}>()
)
export const LoadProdutosFail = createAction  (
    produtosTypeAction.LOAD_PRODUTOS_FAIL,props<{error:string}>()
)


export const LoadProduto = createAction  (
    produtosTypeAction.LOAD_PRODUTO
    ,props<{payload:number}>()
)
export const LoadProdutoSuccess = createAction  (
    produtosTypeAction.LOAD_PRODUTO_SUCCESS,
    props<{payload:ProdutoModel}>()
)
export const LoadProdutoFail = createAction  (
    produtosTypeAction.LOAD_PRODUTO_FAIL,
    props<{error:string}>()
)

