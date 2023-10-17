import { createReducer, on } from "@ngrx/store";
import { decrementCart, incrementCart, resetCart } from "./cart.actions";

export const initialState = 0;

export const counterReducerCart = createReducer(
  initialState,
  on(incrementCart, (state) => state + 1),
  on(decrementCart, (state) => state - 1),
  on(resetCart, (state) => 0),
 
);