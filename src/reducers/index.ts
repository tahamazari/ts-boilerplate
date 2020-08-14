import { combineReducers } from "redux";

// core components
import { FirstReducer } from "./First";
import { SecondReducer } from "./Second";
import { ThirdReducer } from "./Third";
import * as FirstInerfaces from "../actions/First/interfaces";
import { ISecondState } from "../state/Second";
import { IThirdState } from "../state/Third";

export interface StoreState {
    todos: FirstInerfaces.Todos[],
    second: ISecondState,
    third: IThirdState
}

export const reducers = combineReducers<StoreState>({
    todos: FirstReducer,
    second: SecondReducer,
    third: ThirdReducer
})