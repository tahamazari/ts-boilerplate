import { combineReducers } from "redux";

// core components
import { FirstReducer } from "./First";
import { SecondReducer } from "./Second";
import * as FirstInerfaces from "../actions/First/interfaces";
import { ISecondState } from "../state/Second";

export interface StoreState {
    todos: FirstInerfaces.Todos[],
    second: ISecondState
}

export const reducers = combineReducers<StoreState>({
    todos: FirstReducer,
    second: SecondReducer
})