import { combineReducers } from "redux";

// core components
import { FirstReducer } from "./First";
import { SecondReducer } from "./Second";
import * as FirstInerfaces from "../actions/First/interfaces";
import * as SecondInterfaces from "../actions/Second/interfaces";

export interface StoreState {
    todos: FirstInerfaces.Todos[],
    second: SecondInterfaces.SystemState
}

export const reducers = combineReducers<StoreState>({
    todos: FirstReducer,
    second: SecondReducer
})