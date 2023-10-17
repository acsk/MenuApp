import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProdutosService } from '../../services/produtos.service';
import * as fromProdutosAction from '../produtos/produtos.actions'
import { catchError, exhaustMap, map, of } from "rxjs";


@Injectable()
export class ProduTodEffects {

    constructor(
        private actions$: Actions,
        private produtosService: ProdutosService) { }


    loadProdutos$ = createEffect(
        () => this.actions$.pipe(

            ofType(fromProdutosAction.produtosTypeAction.LOAD_PRODUTOS),
            exhaustMap(() => this.produtosService.getProdutos()
                .pipe(
                    map(payload =>
                        fromProdutosAction.LoadProdutosSuccess({
                            payload: []
                        }),
                        catchError(error => of(fromProdutosAction.LoadProdutosFail({ error }))))
                )
            )
        ))
}