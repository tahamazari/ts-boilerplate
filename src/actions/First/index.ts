import * as Interfaces from "./interfaces";
import { ActionTypes } from "../constants";

export const fetchTodos = () => {
    return {
        type: ActionTypes.FETCH_TODOS,
    }
} 

export const setTodos = (payload: Interfaces.Todos[]) => {
    console.log(payload)
    return {
        type: ActionTypes.SET_TODOS,
        payload    
    }
}

//dispatch should by of type Dispatch i.e imported from redux
//atm no type check enforcement
//response should have a type
//action types should be defined using enums