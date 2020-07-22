import { combineReducers } from "redux";

// core components
import { FirstReducer } from "./First";
import * as FirstInerfaces from "../actions/First/interfaces";

export interface StoreState {
    todos: FirstInerfaces.Todos[]
}

export const reducers = combineReducers<StoreState>({
    todos: FirstReducer
})