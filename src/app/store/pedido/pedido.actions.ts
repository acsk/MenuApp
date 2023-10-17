import { createAction, props } from "@ngrx/store";
import { ProdutoModel } from "src/app/model/produtoModel";

export const insereProduto = createAction('[Pedido Component] ADD_Produto', props<{produtoAction: ProdutoModel}>());
export const removeProduto = createAction('[Pedido Component] DELETE_Produto', props<{id:number}>());
