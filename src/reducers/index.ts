import { combineReducers } from "redux";

// core components
import { FirstReducer } from "./First";
import { SecondReducer } from "./Second";
import * as FirstInerfaces from "../actions/First/interfaces";
import { SecondState } from "../state/Second";

export interface StoreState {
    todos: FirstInerfaces.Todos[],
    second: SecondState
}

export const reducers = combineReducers<StoreState>({
    todos: FirstReducer,
    second: SecondReducer
})